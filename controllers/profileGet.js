// profileGet.js
const File = require("../models/File");
exports.profileGet = async function (req, res) {
  const profilePic = await File.findById(req.user.profilePicture);
  let profilePicPath = profilePic.path;
  console.log(profilePicPath, typeof profilePicPath);
  profilePicPath = profilePicPath.replace("public", "");

  res.render("user/profile", {
    title: "Profile",
    user: req.user,
    picPath: profilePicPath,
  });
};
