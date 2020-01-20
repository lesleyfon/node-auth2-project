module.exports = () => async (req, res, next)=>{
    console.log(req.session)
    if(req.session && req.session.user){
        next()
    }else{
        res.status(403).json({
            message: "You are not authorized"
        })
    }
}