const imgContainer = document.getElementById('movie-list')

const url = ' http://localhost:3000/movies'

fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const movielist = data
        // movieImg = movielist[-1].image
        movielist.forEach(element => {
            addImg(element.image)
        });
    })

function addImg(value) {
    const createImg = document.createElement('img')
    createImg.src = value
    imgContainer.appendChild(createImg)
}









