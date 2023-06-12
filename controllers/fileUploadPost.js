// fileUploadPost.js

const File = require("../models/File");
const User = require("../models/User");

exports.fileUploadPost = async function (req, res) {
  try {
    // Create a new file document in the database
    console.log(req.user);
    console.log(req.file);
    const user = await User.findById(req.user._id);
    const file = new File({
      filename: req.file.filename,
      path: req.file.path,
    });

    //update the user's profile picture
    await file.save().then(async function (newFile) {
      user.profilePicture = newFile._id;
      await user.save();
    });
    res.redirect("/user/profile");
  } catch (err) {
    console.error("Failed to upload file:", err);
    res.status(500).send("Failed to upload file.");
  }
};
