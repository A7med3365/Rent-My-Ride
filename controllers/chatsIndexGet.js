// chatsIndexGet.js
const Chat = require("../models/Chat");
const User = require("../models/User");
exports.chatsIndexGet = async function (req, res) {
  const userId = req.user._id;
  const chats = await Chat.find({
    users: {
      $elemMatch: { $in: [userId] },
    },
  });
  console.log(chats);

  let DMs = [];

  for (const chat of chats) {
    const userIndex = chat.users.indexOf(userId);
    let otherIndex = (userIndex + 1) % chat.users.length;
    //const user = await User.findById(chat.users[userIndex]);
    const otherUser = await User.findById(chat.users[otherIndex]);
    DMs.push({
      otherUser: otherUser,
      roomId: chat._id,
    });
  }
  //   res.render("chat/chatsIndex", {
  //     user: user,
  //     otherUser: otherUser,
  //   });
  res.render("chat/chatsIndex", { DMs });
};
