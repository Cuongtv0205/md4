const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = {
    user: 'root',
    password : '123456',
    host : 3306,
    database : 'demo_md4',
    charset : 'utf8_general_ci'
}
const connect = mysql.createConnection()
let products = [
    {
        id: 1,
        name: 'Huy',
        image:'https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_598,h_918/https://hungphatsaigon.vn/wp-content/uploads/2022/07/10_hinh-nen-gau-cute.jpg'
    },

    {
        id: 2,
        name: 'Hung',
        image:'https://haycafe.vn/wp-content/uploads/2022/03/Tai-anh-Luffy-Gear-5.jpg'
    },

    {
        id: 3,
        name: 'Linh',
        image: 'https://znews-photo.zingcdn.me/w660/Uploaded/natmzz/2022_10_30/2022_10_30T141535Z_658248098_UP1EIAU13LX71_RTRMADP_3_SOCCER_ENGLAND_ARS_NTG_REPORT.JPG'
    },
]

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(layouts);
app.set('layout','index');
app.use(express.static('public')); // CẤU hình file tĩnh
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.listen(3000,()=>{
    console.log('--Server Running--')
});

app.get('/',(req, res)=>{
    res.render('product/show',{
        products:products,
    })
});
app.get('/create',(req, res)=>{
    res.render('product/create')
});
app.post('/create',(req, res)=>{
    let newProduct = req.body; // body thay thế cho phần khung của index
    let product = {
         'id' : newProduct.id,
         'name' : newProduct.name,
        'image' : newProduct.image
    }
    products.push(product);
    res.redirect('/');
});
// app.put('edit/:id',(req, res)=>{
// let product = req.body
//
// });
