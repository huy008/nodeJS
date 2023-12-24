import db from "../models/index";
const bcrypt = require("bcrypt");

exports.showLoginForm = (req, res) => {
  res.render("logIn.ejs");
};

exports.login = async (req, res) => {
  const { phuongThucLienLac, matKhau } = req.body;

  if (phuongThucLienLac && matKhau) {
    await db.Nql.findOne({
      raw: true,
      where: { phuongThucLienLac: phuongThucLienLac },
    }).then((nql) => {
      if (!nql) {
        res.redirect("/login");
      } else {
        bcrypt.compare(matKhau, nql.matKhau, (err, result) => {
          if (result == true) {
            req.session.loggedin = true;
            req.session.nql = nql;
            res.redirect("createg-DuAn")
          } else {
            res.render("logIn.ejs");
          }
        });
      }
    });
  } else {
    res.render("logIn.ejs");
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) res.redirect("/500");
    res.redirect("/register");
  });
};
