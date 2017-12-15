var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app", {useMongoClient: true});
var app = express();
app.set("view engine", "ejs");

app.use(require("express-session")({
    secret: "Jonathan is handsome",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/secret", function(req, res){
   res.render("secret"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started.......");
});