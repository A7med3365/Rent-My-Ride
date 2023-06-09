// userIndex.js
const User = require("../models/User");

// Retrieve the user by its ID or any other unique identifier
// const userId = '<user-id>'; // Replace with the actual user ID
// const user = await User.findById(userId).populate('profilePicture');

// console.log(user.profilePicture);

exports.userIndex = function (req, res) {
  User.find({})
    .populate("profilePicture")
    .then((documents) => {
      documents.forEach((document) => {
        console.log(document);
        // Log the documents using your preferred logging mechanism
        res.send(document);
      });
    })
    .catch((error) => {
      console.error("Error retrieving documents:", error);
    });

  //   try {
  //     const users = User.find({});
  //     console.log(users);
  //     res.render("user/index", { users });
  //   } catch (err) {
  //     console.log(error.message);
  //     res.send(error.message);
  //   }
};
