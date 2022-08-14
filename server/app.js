const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const dbService = require('./dbService');
const { response } = require('express');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/search/:searchvalue',(request, response)=>{
    const {searchvalue} = request.params;
    console.log(searchvalue);
    const db = dbService.getDbServiceInstance();
    const result = db.searchbytextno(searchvalue);
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));

})

app.listen(3000, ()=>{
    console.log('app is listening');

});

