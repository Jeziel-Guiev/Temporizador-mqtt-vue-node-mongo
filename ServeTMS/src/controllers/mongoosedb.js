'use strict'
const modelropas = require('../models/ropa')
const controller={
    dog01: async(req,res)=> {
        res.json({
            song01: 'hola mundo',
            song02: 'michael jackson'
        })

    },
    dog02: async(req,res)=> {
        res.json({
            song01: 'hola mundo',
            song02: 'michael jackson'
        })

    },
    insertarRopa: async(req,res)=> {
        const newRopa=new modelropas({
            nombre: req.body.nombre,
            price: req.body.price,
            size: req.body.size,
            brand: req.body.brand,
        })
        const valor01=await newRopa.save({})
        console.log(req.body);
        res.json(valor01)

    }
}
module.exports=controller