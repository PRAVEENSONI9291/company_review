const Sequelize= require('sequelize');
const sequelize= require('../database');

const companyreview= sequelize.define('review',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    companyName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    pros:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cons:{
        type:Sequelize.STRING,
        allowNull:false
    },
    rating:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports= companyreview;