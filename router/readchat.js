const express = require('express');
const mysql = require("mysql");
const db = require("./db.js");
const router = express.Router();
const pool = mysql.createConnection(db.mysql);
router.post('/',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    req.on('data',(key)=>{
    let datas=JSON.parse(key.toString());
    pool.query(`select * from chat_list where userid=${datas.userid} and friendid=${datas.friendid}`,
    (err, result) => {
        if (err) {
          
            throw res.send("数据库出错");
        } else {
            console.log(3332);
           
           
                let data = { code: 200, message: "查询成功",data:result };
              
                res.json(data);
           
        }
    }
);

})
})
module.exports = router;