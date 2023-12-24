const login = require("../controllers/login.controller");
const register = require("../controllers/register.controller");
const authMiddleware = require("../middlewares/authMiddleware");


let initAuthRoutes = (app) => {
  var router = require("express").Router();

  router
    .get("/login", authMiddleware.isAuth, login.showLoginForm)
    .post("/login", login.login)

    .get("/register", authMiddleware.isAuth, register.create)
    .post("/register", register.register)

    .get("/logout", authMiddleware.loggedin, login.logout)


  app.use(router);
};
module.exports = initAuthRoutes ;