const Car = require("../models/Car");
const File = require("../models/File");

exports.rentOut_create_post = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.files);
    const files = req.files.files;
    let filesId = [];

    for (const img of files) {
      const file = new File({
        filename: img.filename,
        path: img.path,
      });

      await file.save().then((newFile) => {
        filesId.push(newFile._id);
      });
    }

    let newCar = req.body;
    newCar.carImages = filesId;
    newCar.carOwner = req.user._id;

    const newPost = new Car(newCar);

    await newPost.save().then(() => {
      console.log("Your post has been saved.");
      res.redirect("/user/posts");
    });
  } catch (error) {
    console.log(error.message);
  }
};
