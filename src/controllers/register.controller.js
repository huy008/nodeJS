import db from "../models/index";
const bcrypt = require("bcrypt");
require("dotenv/config");

exports.create = (req, res) => {
  res.render("register.ejs");
};

exports.register = async (req, res) => {
  const { ten, matKhau, phuongThucLienLac } = req.body;

  if (ten && matKhau && phuongThucLienLac) {
   await db.Nql.findOne({ raw: true ,where: { phuongThucLienLac: phuongThucLienLac}})
   .then(function (nql) {
     if(nql){
      res.render("register.ejs");
     }
      else{
         bcrypt
           .hash(matKhau, parseInt(process.env.BCRYPT_SALT_ROUND))
           .then(async (hashed) => {
             // Create a User
             await db.Nql.create({
               ten: ten,
               matKhau: hashed,
               phuongThucLienLac: phuongThucLienLac,
             });
             res.render("logIn.ejs");
           });
        }
    })
  }else {
    res.render("register.ejs");
  }
};

// exports.verify = (req, res) => {
//   bcrypt.compare(req.query.email, req.query.token, (err, result) => {
//     if (result == true) {
//       User.verify(req.query.email, (err, result) => {
//         if (!err) {
//           res.redirect("/login");
//         } else {
//           res.redirect("/500");
//         }
//       });
//     } else {
//       res.redirect("/404");
//     }
//   });
// };
