// fileUploadPost.js

const File = require("../models/File");

exports.fileUploadPost = async function (req, res) {
  try {
    // Create a new file document in the database
    console.log(req.file);
    const file = new File({
      filename: req.file.filename,
      path: req.file.path,
    });

    await file.save();
    res.send("File uploaded successfully!");
  } catch (err) {
    console.error("Failed to upload file:", err);
    res.status(500).send("Failed to upload file.");
  }
};
