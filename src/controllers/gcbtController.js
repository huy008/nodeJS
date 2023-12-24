import db from "../models/index";

let getGCBT = (req, res) => {
  return res.render("createGCBT.ejs");
};
let postGCBT = async (req, res) => {
  let data = req.body;
  new Promise(async (resolve, reject) => {
    try {
      await db.Ghichubaotri.create({
        nhiemVuBaoDuong: data.NVBD_input,
        quanSat: data.QS_input,
        hanhDong: data.HD_input,
        trangThaiHoanThanh: data.TTHT_input,
        thoiGian: data.TG_input,
      });
      resolve("ok");
    } catch (e) {
      reject(e);
    }
  });
  // let gcbts = await db.Ghichubaotri.findAll({ raw: true });
  // res.render("displayGCBT.ejs", { gcbts });
   res.redirect("/display-GCBT?page=1");
};

let displayGCBT = async (req, res) => {
  const Pagination = 6;
  let page = req.query.page;
  try {
    let totalDuan = await db.Ghichubaotri.count();
    let soTrang = Math.ceil(totalDuan / Pagination);
   await db.Ghichubaotri.findAll({
     raw: true,
     offset: (page - 1) * Pagination,
     limit: Pagination,
   }).then(function (gcbts) {
     res.render("displayGCBT.ejs", {
       gcbts,
       title: "/display-GCBT",
       soTrang: soTrang,
       page: page,
     });
   });
  } catch (e) {
    console.log(e);
  }
};

let getEditGCBT = async (req, res) => {
  let id = req.query.id;
  if (id) {
    try {
      await db.Ghichubaotri.findOne({ where: { id: id }, raw: true }).then(
        function (gcbt) {
          res.render("editGCBT.ejs", { gcbt });
        }
      );
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("loi");
  }
};
let putEditGCBT = async (req, res) => {
  let data = req.body;
  try {
    let gcbt = await db.Ghichubaotri.findOne({
      where: { id: data.id },
      raw: false,
    });
    if (gcbt) {
      (gcbt.nhiemVuBaoDuong = data.NVBD_input),
        (gcbt.quanSat = data.QS_input),
        (gcbt.hanhDong = data.HD_input),
        (gcbt.trangThaiHoanThanh = data.TTHT_input),
        (gcbt.thoiGian = data.TG_input),
        await gcbt.save();
    } else {
      console.log("loi");
    }
  } catch (e) {
    console.log(e);
  }
  // let gcbts = await db.Ghichubaotri.findAll({ raw: true });

  // res.render("displayGCBT.ejs", { gcbts });
   res.redirect("/display-GCBT?page=1");
};
let deleteGCBT = async (req, res) => {
  let data = req.query;
  try {
    let gcbt = await db.Ghichubaotri.findOne({
      where: { id: data.id },
      raw: false,
    });
    if (gcbt) {
      await gcbt.destroy();
    }
  } catch (e) {
    console.log(e);
  }
  // let gcbts = await db.Ghichubaotri.findAll({ raw: true });
  // res.render("displayGCBT.ejs", { gcbts });
   res.redirect("/display-GCBT?page=1");
};

module.exports = {
  getGCBT: getGCBT,
  postGCBT: postGCBT,
  displayGCBT: displayGCBT,
  getEditGCBT: getEditGCBT,
  putEditGCBT: putEditGCBT,
  deleteGCBT: deleteGCBT,
};
