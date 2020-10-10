// const express = require("express");
// const passport = require("passport");
// const passportFacebook = require("passport-facebook").Strategy;
// // import * as express from "express";
// // import * as passport from "passport";
// // import {Strategy} from "passport-facebook";


// const app = express();
// app.listen(5000,()=>{
//     console.log("server is started")
// });

// app.use(passport.initialize());
// app.use(passport.session());

// passport.serializeUser(function(user, cb){
//     cb(null, user);
// });

// passport.deserializeUser(function(obj, cb){
//     cb(null, obj);
// });

// passport.use(new passportFacebook({
//     clientId: "333309537952117",
//     clientSecret:"0c10639980efc88d7e3a377a5de5bdd6",
//     callbackUrl:"http://localhost:5000/fb/auth",
//     profileFields:["id", "displayName"]
// },
// function (accessToken,refreshToken, profile, done){
//     console.log(accessToken, refreshToken, profile);
//     const user = {};
//     done(null, user);
// }
// ));

// app.use("/login/fb",passport.authenticate("facebook"));

// app.use("/failed/login",(re,res, next)=>{
//     res.send("login failed");
// });

// app.use("/fb/auth",passport.authenticate("facebook", 
//     {failureRedirect:"/failed/login"}), function(req, res){
//         console.log(req.user)
//         res.send("logged in to facebook")
// });




var express = require("express");
var app = express();
const facebookStrategy = require("passport-facebook").Strategy;
var passport = require("passport")

passport.use(
    new facebookStrategy({
        clientID:"333309537952117",
        clientSecret:"0c10639980efc88d7e3a377a5de5bdd6",
        callbackURL:"http://localhost:5000/auth/facebook"
    },
    function(profile){
        console.log("profile",profile);
})
)
app.get("/auth/facebook",passport.authenticate("facebook",{
    scope:["profile","email"]
}))

app.get("/auth/facebook/login/callback",passport.authenticate("facebook",{

}))

app.listen(5000,()=>{
    console.log("server is listning on 5000...")
})
