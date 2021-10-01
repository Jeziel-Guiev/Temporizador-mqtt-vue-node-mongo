'use strict'
const app=require('./app')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/database01',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false    
}).then(() => {
    console.log('Conexion satisfactoria')
    app.listen(3000, () => {
        console.log('servidor en marcha')
    })
}).catch(err=>console.log(err))