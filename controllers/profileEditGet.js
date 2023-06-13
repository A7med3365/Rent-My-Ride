// profileEditGet.js
const File = require("../models/File");
exports.profileEditGet = async function (req, res) {
  const profilePic = await File.findById(req.user.profilePicture);
  let profilePicPath = profilePic.path;
  console.log(profilePicPath, typeof profilePicPath);
  profilePicPath = profilePicPath.replace("public", "");

  const user = req.user;

  res.render("user/edit-profile", {
    title: "Profile Edit",
    picPath: profilePicPath,
    user: user,
  });
};
