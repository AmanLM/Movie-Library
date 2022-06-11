# Movie Library WebApp
## Installation

To run the Web Application on your local system download Node.js - https://nodejs.org/en/download/ . This will give you access to the node package manager which is essential to run the project .

## npm install
1. Open the terminal and type in `npm install`, to install all the dependencies.
2. Run: `npm start`
3. Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### 🚩 Building project :
## 1. npm init
Initialize project using `npm init`

## 2. npm install express
Install express using `npm install express`

## 3. npm install ejs
Install ejs using `npm install ejs`
### Include following lines to use ejs in index.js
`app.set('view engine','ejs');`
`app.set('views','./views');`

## 4. npm install express-ejs-layouts
Install the library `npm install express-ejs-layouts`
### Include following lines to use ejs in index.js
`const expressLayouts = require('express-ejs-layouts');`
`app.use(expressLayouts);`

## 5. npm install mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
Install mongoose `npm install mongoose`

## 6. npm install cookie-parser
For reading and writing into cookies, we will be using a library called cookie-parser.
Install the library using the command `npm install cookie-parser`

## 7. npm install passport
Passport is an authenticated middleware for Node.js
Install the passport.js library using the command `npm install passport`

## 8. npm install passport-local
Install the passport-local using the command `npm install passport-local`

## 9. npm install express-session
Install the library using the command `npm install express-session` in the terminal.

## 10. npm install connect-mongo
MongoDB session store for Connect and Express written in Typescript
Install the connect-mongo using `npm install connect-mongo`

## 11. npm install dotenv
Install `npm install env` for .env file

# 📌 Prerequisites

###  1. System requirement :

1. Any system with basic configuration.
2. Operating System : Windows / Linux / Mac

###  2. Software requirement :
1. Updated browser
2. Node.js installed (If not download it [here](https://nodejs.org/en/download/)).
3. Any text editor of your choice.

# Technologies  used

1. Javascript
2. NodeJS,ExpressJS
3. MongoDB for database
4. passportjs library for authentication
5. OMDB API
6. HTML,CSS,ejs

# Features 
  
1. Sign In and Sign Up autjentication
2. Built using MVC Architecture
3. User can search a movie name and get details of that movie
4. Details of movies are fetched from API
5. User can add a movie to a playlist
6. Playlist is completely private and user can see it after login only
7. Without sign in user can search movie and get details but cannot add to playlist

