import db from "../models/index";

let getHome = (req, res) => {
  return res.render("register.ejs");
};

let getDuAn = (req, res) => {
  return res.render("createDuAn.ejs");
};
let postDuAn = async (req, res) => {
  let data = req.body;
  new Promise(async (resolve, reject) => {
    try {
      await db.Duan.create({
        tenDuAn: data.TDA_input,
        ngayBatDauDuAn: data.NBD_input,
        ngayKetThucDuAn: data.NKT_input,
        moTaDuAn: data.MTDA_input,
        nguoiQuanLy: data.NQL_input,
      });
      resolve("ok");
    } catch (e) {
      reject(e);
    }
  });
  // let posts = await db.Duan.findAll({ raw: true });
  // res.render("displayDuAn.ejs", { posts });
  res.redirect("/display-DuAn?page=1");
};

let displayDuAn = async (req, res) => {
  const Pagination = 6;
  let page = req.query.page;
  try {
    let totalDuan = await db.Duan.count();
    let soTrang = Math.ceil(totalDuan / Pagination);
    await db.Duan.findAll({
      raw: true,
      offset: (page - 1) * Pagination,
      limit: Pagination,
    }).then(function (posts) {
      res.render("displayDuAn.ejs", {
        posts,
        title: "/display-DuAn",
        soTrang: soTrang,
        page: page,
      });
    });
  } catch (e) {
    console.log(e);
  }
};
let getEditDuAn = async (req, res) => {
  let id = req.query.id;
  if (id) {
    try {
      await db.Duan.findOne({ where: { id: id }, raw: true }).then(function (
        post
      ) {
        res.render("editDuAn.ejs", { post });
      });
    } catch (e) {
      console.log(e);
    }
  } else {
  }
};
let putEditDuAn = async (req, res) => {
  let data = req.body;

  try {
    let duan = await db.Duan.findOne({ where: { id: data.id }, raw: false });
    //console.log(data);
    if (duan) {
      duan.tenDuAn = data.TDA_input;
      duan.moTaDuAn = data.MTDA_input;
      duan.ngayBatDauDuAn = data.NBD_input;
      duan.ngayKetThucDuAn = data.NKT_input;
      duan.nguoiQuanLy = data.NQL_input;
      await duan.save();
    } else {
      console.log("loi");
    }
  } catch (e) {
    console.log(e);
  }
  // let posts = await db.Duan.findAll({ raw: true });

  // res.render("displayDuAn.ejs", { posts });
  res.redirect("/display-DuAn?page=1");
};
let deleteDuAn = async (req, res) => {
  let data = req.query;
  try {
    let duan = await db.Duan.findOne({ where: { id: data.id }, raw: false });
    if (duan) {
      await duan.destroy();
    }
  } catch (e) {
    console.log(e);
  }
  // let posts = await db.Duan.findAll({ raw: true });
  //res.render("displayDuAn.ejs", { posts });
  res.redirect("/display-DuAn?page=1");
};
module.exports = {
  getHome: getHome,
  getDuAn: getDuAn,
  postDuAn: postDuAn,
  displayDuAn: displayDuAn,
  getEditDuAn: getEditDuAn,
  putEditDuAn: putEditDuAn,
  deleteDuAn: deleteDuAn,
};
