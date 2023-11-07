const imgContainer = document.getElementById("movie-list");

const movieInfoContainer = document.getElementById("movie-info");

const detailImage = document.getElementById("detail-image");

const title = document.getElementById("title");

const yearReleased = document.getElementById("year-released");

const description = document.getElementById("description");

const watched = document.getElementById("watched");

const url = " http://localhost:3000/movies";

function renderMovieInfo(movie) {

    detailImage.src = movie.image;
    title.textContent = movie.title;
    yearReleased.textContent = movie.release_year;
    description.textContent = movie.description;
    watched.textContent = movie.watched;
}

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const movielist = data;
        // movieImg = movielist[-1].image
        renderMovieInfo(movielist[0]);
        movielist.forEach((movie) => {
            addImg(movie);
        });
    });

function addImg(value) {
    let createImg = document.createElement("img");
    createImg.src = value.image;
    createImg.addEventListener('click', () => renderMovieInfo(value))
    imgContainer.appendChild(createImg);
}

