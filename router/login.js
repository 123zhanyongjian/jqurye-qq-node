const express = require('express');
const mysql = require("mysql");
const db = require("./db.js");
const router = express.Router();
const pool = mysql.createConnection(db.mysql);
router.post('/',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    req.on('data',(key)=>{
    let datas=JSON.parse(key.toString());
    pool.query(`SELECT * FROM user WHERE user='${datas.user}' AND pass='${datas.pass}'`,
    (err, result) => {
        if (err) {
          
            throw res.send("数据库出错");
        } else {
            
           
           if(result.length>0){
           
                let data = { code: 200, message: "登录成功",data:result };
                res.send(data);
            }else{
               
                let data = { code: 200, message: "账号或密码错误" };
                res.json(data);
               }
           }
        }
    
);

})
})
module.exports = router;