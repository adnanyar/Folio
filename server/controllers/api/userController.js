const express=require('express')
const index =(req,res)=>{
    res.json({'staus':'ok','message':'welcome'})
}



const registerUser=(req,res)=>{
    res.json({'staus':'ok','message':'welcome'})
}
const loginUser=(req,res)=>{
    res.json({'staus':'ok','message':'welcome'})
}
const destoryUser=(req,res)=>{
    res.json({'staus':'ok','message':'welcome'})
}

const updateUser=(req,res)=>{
    res.json({'staus':'ok','message':'welcome'})
}
const viewUser=(req,res)=>{
    res.json({'staus':'ok','message':'welcome'})
}
const storeUser=(req,res)=>{
    res.json({'staus':'ok','message':'welcome'})
}




module.exports = {
    index, // Exporting indexFunction as a property of an object
    registerUser,
    loginUser,
    destoryUser,
    updateUser,
    viewUser,
    storeUser
};