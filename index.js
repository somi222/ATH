const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "react_db",
});

app.post('/create', (req, res) => {
    const title = req.body.title;
    const imgPreview = req.body.imgPreview;
    const gsm = req.body.gsm;
    const price = req.body.price;
    const color = req.body.color;
    const width = req.body.width;
    const lenght = req.body.lenght;
    const gusset = req.body.gusset;
    const topfold = req.body.topfold;
    const handle = req.body.handle;
    const piping = req.body.piping;
    const wastage = req.body.wastage;
    const wastagerecovery = req.body.wastagerecovery;
    const cmt = req.body.cmt;
    const printing = req.body.printing;
    const packing = req.body.packing;
    const overheads = req.body.overheads;
    const profit = req.body.profit;
    const saletax = req.body.saletax;
    const incometax = req.body.incometax;
    const commission = req.body.commission;

    db.query(
        "INSERT INTO add_product (pro_title, pro_img, gsm, price, color, width, lenght, gusset, topfold, handle, piping, wastage, wastagerecovery, cmt, printing, packing, overheads, profit, saletax, incometax, commission) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
         [title, imgPreview, gsm, price, color, width, lenght, gusset, topfold, handle, piping, wastage, wastagerecovery, cmt, printing, packing, overheads, profit, saletax, incometax, commission],
         (err, result) => {
             if (err) {
                 console.log(err);
             } else {
                 res.send("Value's Inserted");
             }
         }
        );
});

app.get('/products', (req, res) =>{
    db.query("SELECT * from add_product",
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.listen(3002, () => {
    console.log("Yey, Your Server is Running");
});