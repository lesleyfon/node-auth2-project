const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const { findUsers, addUser } = require('./../models/userModels')

router.post('/register', async (req, res, next)=> {
    const user = req.body;
    try {
        if(user){
            res.status(201).json({
                message: 'New user created',
                user: await addUser(user)
            })
        }
    } catch (error) {
        res.status(401).json({
            message:'error',
            error: error 
        })
    }
   
})

router.get('/users', async (req, res, next)=>{
    res.status(200).json({
        data: await findUsers()
    })
})

module.exports = router;