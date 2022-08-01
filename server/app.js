const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//read
app.get('/getAll',(req, res)=>{
    console.log('it wrereorks');
    res.json({success:true});
});

app.listen(process.env.PORT, ()=>{
    console.log('app is listening');
});