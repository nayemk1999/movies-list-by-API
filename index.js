// Resquest Link- https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
// API Key -765bfb2b50e3a45cd80edf8f4bb0ef55
// image path - https://image.tmdb.org/t/p/w1280/

const apiKey = '765bfb2b50e3a45cd80edf8f4bb0ef55';
const displayMovies = document.getElementById("displayMovies");
// console.log(displayMovies);


function getPopularMovies() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            let previewsHTML = displayMovies.innerHTML;

            data.results.map(movie => {
                const htmlTemplate =`<div class="col-md-4">
                <div class="card">
                    <img src="https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                  </div>
            </div>`

            previewsHTML += htmlTemplate;
            })
           displayMovies.innerHTML = previewsHTML;
        })

        .catch(error => alert('Please reload your Page or another site visit.'))
}

getPopularMovies();
