const { Client } = require('pg')

const client = global.client = new Client({
    host : "host_adi",
    user : "kullanici_adi",
    port: default_port,
    password: "sifre",
    database: "veritabani_adi"
});


client.connect();

client.query(`select * from tablo_adi`, (err, res) =>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log("Error occured: " + err.message)
    }
    client.end();
})