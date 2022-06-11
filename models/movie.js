const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    movie : {
        type : String
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{
    timestamps : true
})

const Movie = mongoose.model("Movie",movieSchema);
module.exports = Movie;