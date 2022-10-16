function Films(name, year, imdb,image){
    this.name = name;
    this.year = year;
    this.imdb = imdb;
    this.image = image;
}
let InterStellar = new Films("InterStellar","2014","IMDb:8.7","https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg");
let BirdBox = new Films("Bird box","2018","IMDb:8","https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Bird_Box_%28film%29.png/220px-Bird_Box_%28film%29.png");

let films = [InterStellar,BirdBox];
let box = document.getElementById("box");
getFilms();
function getFilms(){
    box.innerHTML = "";
    for (const film of films) {
        box.innerHTML +=
        `<div class="col-md-4 w-25 card me-3 bg">
            <img class="w-100" src="${film.image}">
            <div>
                <h1 class="text-white">${film.name} </h1>
                <em class="fs-3 text-white">${film.imdb}</em>
                <p class="text-white">${film.year}</p>
            </div>
        </div>`
    }
}

function CreateFilm(){
    films.push(new Films(inputName.value,inputYear.value,inputImdb.value,ImageUrl.value))
    getFilms()
}