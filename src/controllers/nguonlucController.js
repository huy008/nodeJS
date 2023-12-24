import db from "../models/index";

let getNguonLuc = (req, res) => {
  return res.render("createNguonLuc.ejs");
};
let postNguonLuc = async (req, res) => {
  let data = req.body;
  new Promise(async (resolve, reject) => {
    try {
      await db.Nguonluc.create({
        tenNguonLuc: data.TNL_input,
        loaiNguonLuc: data.LNL_input,
        moTaNguonLuc: data.MTNL_input,
        khaNangNguonLuc: data.KNNL_input,
        chiPhi: data.CP_input,
        thoiGianSuDung: data.TGSD_input,
      });
      resolve("ok");
    } catch (e) {
      reject(e);
    }
  });
  res.redirect("/display-NguonLuc?page=1");
};

let displayNguonLuc = async (req, res) => {
  const Pagination = 6;
  let page = req.query.page;
  try {
    let totalDuan = await db.Nguonluc.count();
    let soTrang = Math.ceil(totalDuan / Pagination);
    await db.Nguonluc.findAll({
      raw: true,
      offset: (page - 1) * Pagination,
      limit: Pagination,
    }).then(function (nguonlucs) {
      res.render("displayNguonLuc.ejs", {
        nguonlucs,
        title: "/display-NguonLuc",
        soTrang: soTrang,
        page: page,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

let getEditNguonLuc = async (req, res) => {
  let id = req.query.id;
  if (id) {
    try {
      await db.Nguonluc.findOne({ where: { id: id }, raw: true }).then(
        function (nguonluc) {
          res.render("editNguonLuc.ejs", { nguonluc });
        }
      );
    } catch (e) {
      console.log(e);
    }
  } else {
  }
};
let putEditNguonLuc = async (req, res) => {
  let data = req.body;
  try {
    let nguonluc = await db.Nguonluc.findOne({
      where: { id: data.id },
      raw: false,
    });
    if (nguonluc) {
      (nguonluc.tenNguonLuc = data.TNL_input),
        (nguonluc.loaiNguonLuc = data.LNL_input),
        (nguonluc.moTaNguonLuc = data.MTNL_input),
        (nguonluc.khaNangNguonLuc = data.KNNL_input),
        (nguonluc.chiPhi = data.CP_input),
        (nguonluc.thoiGianSuDung = data.TGSD_input),
        await nguonluc.save();
    } else {
      console.log("loi");
    }
  } catch (e) {
    console.log(e);
  }
  // let nguonlucs = await db.Nguonluc.findAll({ raw: true });
  res.redirect("/display-NguonLuc?page=1");
};
let deleteNguonLuc = async (req, res) => {
  let data = req.query;
  try {
    let nguonluc = await db.Nguonluc.findOne({
      where: { id: data.id },
      raw: false,
    });
    if (nguonluc) {
      await nguonluc.destroy();
    }
  } catch (e) {
    console.log(e);
  }
  //let nguonlucs = await db.Nguonluc.findAll({ raw: true });
  // res.render("displayNguonLuc.ejs", { nguonlucs });
  res.redirect("/display-NguonLuc?page=1");
};

module.exports = {
  getNguonLuc: getNguonLuc,
  postNguonLuc: postNguonLuc,
  displayNguonLuc: displayNguonLuc,
  getEditNguonLuc: getEditNguonLuc,
  putEditNguonLuc: putEditNguonLuc,
  deleteNguonLuc: deleteNguonLuc,
};
