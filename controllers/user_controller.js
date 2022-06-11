const User = require('../models/user');

module.exports.Profile = function(req,res){
    return res.render('profile', {
        title: 'Profile'
    })
}
module.exports.signup = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('signup', {
        title: "SignUp"
    })
}
module.exports.signin = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    return res.render('signin', {
        title: "SignIn"
    })
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        console.log("Not matching passwords while signup");
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("Error in finding in databse")
            return;
        }

        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("Error in creating");
                    return;
                }
                console.log("Created User in database for signup");
                return res.redirect('/users/signin');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}

module.exports.createsession = function(req,res){
    return res.redirect('/');
}

module.exports.destroysession = function(req,res){
    req.logout(req.user, err => {
        if(err) return next(err);
        res.redirect("/");
    });
}