const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const { findUsers } = require('./../models/userModels')

router.get('/users', async (req, res, next)=>{
    res.status(200).json({
        data: await findUsers()
    })
})

module.exports = router;