// adminFileViewGet.js
// this will be the controller for the admin file view page
exports.adminFileViewGet = function (req, res) {
  const imgPath = req.query.path.replace("public", "");
  res.render("admin/fileView", { imgPath });
};
