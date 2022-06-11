require("dotenv").config();

const express = require('express');
const app = express();
const port = 8000;

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-startergy');
//Mongo-store
const MongoStore = require('connect-mongo')


//cookie-parser
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//database
const db = require('./config/mongoose');
//include layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//for styling static files
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//static files
app.use(express.static('./assets'));

// EJS Set-up
app.set('view engine','ejs');
app.set('views','./views');

//MongoStore stores session cookies
app.use(session({
    name: 'MovieApp',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store : MongoStore.create(
        {
            mongoUrl : 'mongodb://localhost/majorproject1',
            autoRemove : 'disabled'
        },function(err){
            console.log(err || "Connection is fine");
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log("Error: ",err);
        return;
    }
    console.log("Successfully running on port",port);
})