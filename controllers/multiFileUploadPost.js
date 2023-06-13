// multiFileUploadPost.js
exports.multiFileUploadPost = function (req, res) {
  try {
    // console.log(req.user);
    console.log(req.body); // Access the text inputs via req.body
    console.log(req.files); // Access the uploaded files via req.files

    // Process the text inputs and file uploads as needed
    // ...

    res.send("File(s) uploaded successfully!");
  } catch (err) {
    console.error("Failed to upload file(s):", err);
    res.status(500).send("Failed to upload file(s).");
  }
};
