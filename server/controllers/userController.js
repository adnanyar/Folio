

const express=require('express');
const indexFunction=(req,res)=>{

    res.render('welcome')
}


module.exports = {
    indexFunction // Exporting indexFunction as a property of an object
}; 

