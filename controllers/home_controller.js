const Movie = require('../models/movie');

module.exports.home = function(req,res){

    Movie.find({})
    .populate('user')
    .exec(function(err,movies){
        if(err){
            console.log(movies);
            console.log(err);
        }
        
        return res.render('home',{
            title:"HomePage",
            movies : movies
        });
    })
}  