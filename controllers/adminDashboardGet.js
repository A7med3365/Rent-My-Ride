// adminDashboardGet.js
exports.adminDashboardGet = function (req, res) {
  res.render("admin/dashboard", {
    title: "Admin Dashboard",
  });
};
