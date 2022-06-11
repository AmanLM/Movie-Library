const Movie = require('../models/movie');

module.exports.playlist = function(req,res){

    Movie.create({
        movie : req.body.Name,
        user : req.user._id
    },function(err,list){
        if(err){
            console.log(err);
        }
        console.log("Saved to playlist");
        return res.redirect('back');
    }
    )
}

module.exports.destroy = function(req,res){

    Movie.findById(req.params.id, function(err, movie){
        movie.remove();
        console.log("Deleted movie from Playlist");
        
        return res.redirect('back');

    });
}