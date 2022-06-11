const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connecting to MongoDB cloud');
  })
  .catch((err) => {
    console.log(err);
  });







//For LocalHost mongoDB
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/movieproject');

// const db = mongoose.connection;

// db.on('error',console.error.bind(console,"Error while connecting to database"));

// db.once('open',function(){
//     console.log("Connected to Database");
// });

// module.exports = db;