import express from "express";
import duanController from "../controllers/duanController";
import congviecController from "../controllers/congviecController";
import nguonlucController from "../controllers/nguonlucController";
import gcbtController from "../controllers/gcbtController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", duanController.getHome);

  router.get("/createg-DuAn", duanController.getDuAn);
  router.post("/createp-DuAn", duanController.postDuAn);
  router.get("/display-DuAn", duanController.displayDuAn);
  router.get("/editg-DuAn", duanController.getEditDuAn);
  router.post("/editp-DuAn", duanController.putEditDuAn);
  router.get("/delete-DuAn", duanController.deleteDuAn);

  router.get("/createg-CongViec", congviecController.getCongViec);
  router.post("/createp-CongViec", congviecController.postCongViec);
  router.get("/display-CongViec", congviecController.displayCongViec);
  router.get("/editg-CongViec", congviecController.getEditCongViec);
  router.post("/editp-CongViec", congviecController.putEditCongViec);
  router.get("/delete-CongViec", congviecController.deleteCongViec);

  router.get("/createg-NguonLuc", nguonlucController.getNguonLuc);
  router.post("/createp-NguonLuc", nguonlucController.postNguonLuc);
  router.get("/display-NguonLuc", nguonlucController.displayNguonLuc);
  router.get("/editg-NguonLuc", nguonlucController.getEditNguonLuc);
  router.post("/editp-NguonLuc", nguonlucController.putEditNguonLuc);
  router.get("/delete-NguonLuc", nguonlucController.deleteNguonLuc);

  router.get("/createg-GCBT", gcbtController.getGCBT);
  router.post("/createp-GCBT", gcbtController.postGCBT);
  router.get("/display-GCBT", gcbtController.displayGCBT);
  router.get("/editg-GCBT", gcbtController.getEditGCBT);
  router.post("/editp-GCBT", gcbtController.putEditGCBT);
  router.get("/delete-GCBT", gcbtController.deleteGCBT);

  return app.use("/", router);
};

module.exports = initWebRoutes;
