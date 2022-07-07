const { Router } = require('express');
const fs = require('fs');
const database = require('../database.json');

const router = Router() 

router.post('/registration', async (req, res) => {
    const newDataBase = JSON.stringify([...database, { login: req.body.login, password: req.body.password }]);
    fs.writeFile("database.json", newDataBase, function(err){
        if(err)throw err;
    })
    res.send('Пользователь зарегистрирован');
})

router.get('/users', async (req, res) => {
    res.send([...database]);
    console.log('Данные отправлены')
})

router.delete('/delete/:id', async(req, res) => {
    database.splice(req.params.id , 1);
})

router.put('/edit/:id', async(req, res) => {
    database[req.params.id] = { login: req.body.newLogin, password: req.body.newPassword}
    fs.writeFile("database.json", JSON.stringify(database), function(err){
        if(err)throw err;
    })
})

module.exports = router