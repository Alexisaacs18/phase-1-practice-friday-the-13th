const imgContainer = document.getElementById("movie-list");
const movieInfoContainer = document.getElementById("movie-info");

const url = " http://localhost:3000/movies";

function renderMovieInfo(movie) {
  const detailImage = document.getElementById("detail-image");
  const title = document.getElementById("title");
  const yearReleased = document.getElementById("year-released");
  const description = document.getElementById("description");
  const watched = document.getElementById("watched");

  detailImage.src = movie.image;
  title.innerText = movie.title;
  yearReleased.innerText = movie.release_year;
  description.innerText = movie.description;
  watched.innerText = movie.watched;

  // const detailImageContent = detailImage.src;
  // const titleContent = title.textContent;
  // const yearReleasedContent = yearReleased.textContent;
  // const descriptionContent = descriptionContent.textContent;
  // const watchedContent = watched.textContent;

  // detailImageContent.append(movie);
  // titleContent.append(movie);
  // yearReleasedContent.append(movie);
  // descriptionContent.append(movie);
  // watchedContent.append(movie);
}

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const movielist = data;
    // movieImg = movielist[-1].image
    renderMovieInfo(movielist[0]);
    movielist.forEach((movie) => {
      addImg(movie.image);
    });
  });

function addImg(value) {
  const createImg = document.createElement("img");
  createImg.src = value;
  imgContainer.appendChild(createImg);
}
