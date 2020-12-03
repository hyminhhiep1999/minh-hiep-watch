const { User } = require('./../models/user');


let auth = (req,res,next) =>{
    //
    let token = req.cookies.w_auth;

    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            isAuth: false,
            error: true
        });
        
        req.token = token;
        req.user = user;
        next();
    })
    //sau khi kiem tra thì chạy bề nêm server('/api/users/auth')
}
module.exports = { auth }