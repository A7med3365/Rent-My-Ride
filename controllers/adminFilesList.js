// adminFilesList.js
const File = require("../models/File");

exports.adminFilesList = async function (req, res) {
  const files = await File.find();
  res.render("admin/filesIndex", { files });
};
