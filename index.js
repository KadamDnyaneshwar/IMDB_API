const sequelize=require("./util/database");
const movies=require("./model/movies");
const movie_year=require("./model/movie_year");
// const express=require("express");
// const app= express();

sequelize.sync().then(result=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);

    });


 