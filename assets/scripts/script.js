let button = document.getElementById("clicked");
let Name = " ";

button.addEventListener('click',async function(e){
    
    var movieName = document.getElementById('movie-name').value;
    const result = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=6a4ebfb`);
    const MovieDetails = await result.json();
    Name = MovieDetails.Title;
    showDetails(MovieDetails);
});


function showDetails(info){
    var result = document.getElementById('result');
    if(info.Response=='True'){
        result.innerHTML = `
        <div class="wrapper">
                <div class="movie-poster">
                    <img src="${info.Poster}" alt="Loading..." >
                </div>
            </div>
            <div class="info">
                <div class="movie-info-1">
                    <h1 class="movie-title">Name of a Movie : ${info.Title}</h1>
                    <ul class="movie-info">
                        <li class="year">Year: ${info.Year}</li>
                        <li class="released">Released: ${info.Released}</li>
                        <li class="country">Country: ${info.Country}</li>
                    </ul>
                </div>
                <div class="movie-info-2">
                    <p class="genre">
                        <span class="line line1">Genre:</span> 
                        <span class=" line line2">${info.Genre}</span>
                    </p>
                    <p class="runtime">
                        <span class="line line1">Movie Duration:</span>
                        <span class="line line2">${info.Runtime}</span>
                    </p>
                    <p class="actors">
                        <span class="line line1">Actors: </span>
                        <span class="line line2">${info.Actors}</span>
                    </p>
                    <p class="writers">
                        <span class="line line1">Writer: </span>
                        <span class="line line2">${info.Writer}</span>
                    </p>
                    <p class="language">
                        <span class="line line1">Language:</span>
                        <span class="line line2">${info.Language}</span>
                    </p>
                    <p class="imdbRating">
                        <span class="line line1">IMDB Rating:</span>
                        <span class="line line2">${info.imdbRating}</span>
                    </p>
                    <p class="plot">
                        <span class="line line1">Plot: </span>
                        <span class="line line2">${info.Plot}</span>
                    </p>
                </div>
            </div>  
        `;
        var playlistButton = document.getElementById('add-to-playlist');

        playlistButton.innerHTML = `
        <form action="/movies/playlist" method="post">
            <input type="hidden" name="Name" value="${info.Title}">
            <input type="submit" value="Add to Playlist" id="palylist-button">
        </form> 
            `;
        
    }
    else{
        result.innerHTML = `
        <h1>Movie Not Found!</h1>
        `;
    }
}

