const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("dashboard");
});

router.get("/profile", (req, res) => {
  res.render("profile");
});

router.get("/settings", (req, res) => {
  res.render("settings");
});

router.get("/billing", (req, res) => {
  res.render("billing");
});

router.get("/pricing", (req, res) => {
  res.render("pricing");
});

router.get("/sign-in", (req, res) => {
  res.render("sign-in", {layout: 'auth.hbs'});
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up", {layout: 'auth.hbs'});
});

router.get("/forgot-password", (req, res) => {
  res.render("forgot-password", {layout: 'auth.hbs'});
});

module.exports = router;
