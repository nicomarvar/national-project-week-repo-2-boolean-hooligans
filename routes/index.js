import express from "express";
export const Router = express.Router();

/* GET home page. */
Router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
