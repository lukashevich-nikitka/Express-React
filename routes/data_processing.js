const { Router } = require('express');
const fs = require('fs');
const database = require('../database.json');

const router = Router() 

// router.get('/data', async (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.send({id: 7, name: "Nikita"});
// })

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

module.exports = router