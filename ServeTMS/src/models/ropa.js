'use strict'
const mongoose=require('mongoose')
const {Schema}=mongoose;
const ropayzapatos=new Schema({
    nombre:{
        type:String},
    price:{
        type:Number},
    size:{
        type:String},
    brand:{
        type:String},
    creationDate:{
        type:Date, default: new Date()},
    
})
module.exports=mongoose.model('mucharopa',ropayzapatos)