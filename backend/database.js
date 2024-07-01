const Sequelize= require('sequelize');

const sequelize= new Sequelize('company_review', 'root', 'Helloworld1*',{
    dialect:'mysql',
    host:'localhost'
});

module.exports= sequelize;