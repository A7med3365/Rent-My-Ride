const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log("hi");
    cb(null, "public/uploads"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        "." +
        file.originalname.split(".").pop()
    ); // File naming convention
  },
});

module.exports = storage;
