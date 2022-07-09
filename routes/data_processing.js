const { Router } = require("express");
const fs = require("fs");
const database = require("../database.json");

const router = Router();

router.post("/registration/:id", async (req, res) => {
  const newDataBase = JSON.stringify([
    ...database,
    { login: req.body.login, password: req.body.password, id: req.params.id },
  ]);
  fs.writeFile("database.json", newDataBase, function (err) {
    if (err) throw err;
  });
  res.send("Пользователь зарегистрирован");
});

router.get("/users", async (req, res) => {
  res.send([...database]);
  console.log("Данные отправлены");
});

router.delete("/delete/:id", async (req, res) => {
  let user = database.find((el) => el.id === req.params.id);
  let index;
  if (user) {
    index = database.indexOf(user);
    database.splice(index, 1)
    fs.writeFile("database.json", JSON.stringify(database), function (err) {
      if (err) throw err;
    });
  } else {
    console.log('Пользователь не найден')
  }
});

router.put("/edit/:id", async (req, res) => {
  let user = database.find((el) => el.id === req.params.id);
  let index;
  if (user) {
    index = database.indexOf(user);
    database[index] = { login: req.body.newLogin, password: req.body.newPassword, id: req.params.id }
    fs.writeFile("database.json", JSON.stringify(database), function (err) {
      if (err) throw err;
    });
  } else {
    console.log('Пользователь не найден')
  }
  // database[req.params.id] = {
  //   login: req.body.newLogin,
  //   password: req.body.newPassword,
  // };
  // fs.writeFile("database.json", JSON.stringify(database), function (err) {
  //   if (err) throw err;
  // });
});

module.exports = router;
