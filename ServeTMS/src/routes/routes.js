'use strict'
const express=require('express')
const routes=express.Router()
const controllercall=require('../controllers/mongoosedb')
routes.get('/computer',async function kettle(rec,res){
    res.json({
        data1: "informacion",
        data2: "hola"
    })
})
routes.get('/database01', controllercall.dog01)
routes.post('/database02', controllercall.insertarRopa)
module.exports=routes
