const express= require('express');
const cors= require('cors');
const bodyParser= require('body-parser');
const Sequelize= require('sequelize');


const companyreview= require('./models/review');
const sequelize=require('./database')


const app= express();

app.use(cors());
app.use(bodyParser.json());


app.get('/review', async(req, res)=>{
    let company= req.query.companyName;
    
    try {
        let resp= await companyreview.findAll({where:{companyName:company}});

        res.json(resp);
        
    } catch (error) {
        
    }
})



app.post('/review', async(req, res)=>{

    try {
    await companyreview.create(req.body);

        
    } catch (error) {
        console.log("error while posting");
    }

})




sequelize.sync()

.then(res=>{
    app.listen(3000);
}).catch(err=>{
    console.log("error while syncing");
})