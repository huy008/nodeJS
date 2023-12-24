import db from "../models/index";

let getCongViec = (req, res) => {
  return res.render("createCongViec.ejs");
};
let postCongViec = async (req, res) => {
  let data = req.body;
  new Promise(async (resolve, reject) => {
    try {
      await db.Congviec.create({
        tenCongViec: data.TCV_input,
        ngayBatDauCongViec: data.NBDCV_input,
        ngayKetThucCongViec: data.NKTCV_input,
        moTaCongViec: data.MTCV_input,
        trangThaiCongViec: data.TTCV_input,
        tenNhanVien: data.TNV_input,
      });
      resolve("ok");
    } catch (e) {
      reject(e);
    }
  });
  // let jobs = await db.Congviec.findAll({ raw: true });
  // res.render("displayCongViec.ejs", { jobs });
  res.redirect("/display-CongViec?page=1");
};

let displayCongViec = async (req, res) => {
  const Pagination = 6;
  let page = req.query.page;
  try {
    let totalDuan = await db.Congviec.count();
    let soTrang = Math.ceil(totalDuan / Pagination);
    await db.Congviec.findAll({
      raw: true,
      offset: (page - 1) * Pagination,
      limit: Pagination,
    }).then(function (jobs) {
      res.render("displayCongViec.ejs", {
        jobs,
        title: "/display-CongViec",
        soTrang: soTrang,
        page: page,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

let getEditCongViec = async (req, res) => {
  let id = req.query.id;
  if (id) {
    try {
      await db.Congviec.findOne({ where: { id: id }, raw: true }).then(
        function (job) {
          res.render("editCongViec.ejs", { job });
        }
      );
    } catch (e) {
      console.log(e);
    }
  } else {
  }
};
let putEditCongViec = async (req, res) => {
  let data = req.body;
  try {
    let job = await db.Congviec.findOne({
      where: { id: data.id },
      raw: false,
    });
    //console.log(data);
    if (job) {
      (job.tenCongViec = data.TCV_input),
        (job.ngayBatDauCongViec = data.NBDCV_input),
        (job.ngayKetThucCongViec = data.NKTCV_input),
        (job.moTaCongViec = data.MTCV_input),
        (job.trangThaiCongViec = data.TTCV_input),
        (job.tenNhanVien = data.TNV_input),
        await job.save();
    } else {
      console.log("loi");
    }
  } catch (e) {
    console.log(e);
  }
  // let jobs = await db.Congviec.findAll({ raw: true });
  // res.render("displayCongViec.ejs", { jobs });
  res.redirect("/display-CongViec?page=1");
};
let deleteCongViec = async (req, res) => {
  let data = req.query;
  try {
    let job = await db.Congviec.findOne({ where: { id: data.id }, raw: false });
    if (job) {
      await job.destroy();
    }
  } catch (e) {
    console.log(e);
  }
  // let jobs = await db.Congviec.findAll({ raw: true });
  // res.render("displayCongViec.ejs", { jobs });
  res.redirect("/display-CongViec?page=1");
};

module.exports = {
  getCongViec: getCongViec,
  postCongViec: postCongViec,
  displayCongViec: displayCongViec,
  getEditCongViec: getEditCongViec,
  putEditCongViec: putEditCongViec,
  deleteCongViec: deleteCongViec,
};
