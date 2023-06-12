const io = require("../../server");
const Chat = require("../../models/Chat");

exports.onConnection = function (socket) {
  console.log("Connection established");

  socket.on("join", async (senderId, receiverId) => {
    try {
      // console.log(senderId, receiverId);
      // Check if the chat room already exists
      const existingChat = await Chat.findOne({
        users: {
          $all: [senderId, receiverId],
        },
      });
      console.log(existingChat);

      if (existingChat) {
        const chatRoom = existingChat._id.toString();
        console.log(senderId + " joined " + chatRoom);
        socket.join(chatRoom);

        // Retrieve and emit existing messages
        const messages = existingChat.messages.map((message) => {
          return `${message.content}`;
        });
        console.log(messages);
        for (const msg of messages) {
          io.to(chatRoom).emit("chat message", msg);
        }
      } else {
        // Create a new chat room
        const chat = new Chat({
          users: [senderId, receiverId],
          messages: [
            {
              sender: senderId,
              content: "start of the chat",
              timestamp: new Date(),
            },
          ],
        });
        await chat.save().then(function (newChat) {
          const chatRoom = newChat._id.toString();
          console.log(senderId + "joined" + chatRoom);
          socket.join(chatRoom);
        });
      }
    } catch (error) {
      // Handle errors
      console.error(error);
    }

    // if (user == "Ali" || user == "Ahmed") {
    //   console.log(user + " joined");
    //   socket.join("ALinAhmed");
    // }
  });
  socket.on("chat message", async (senderId, receiverId, msg) => {
    const chat = await Chat.findOne({
      users: {
        $all: [senderId, receiverId],
      },
    });
    const chatRoom = chat._id.toString();
    // console.log(chatRoom);
    chat.messages.push({
      sender: senderId,
      content: msg,
      timestamp: new Date(),
    });
    await chat.save();
    console.log("message: " + msg);
    io.to(chatRoom).emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
};
