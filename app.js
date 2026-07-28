const movies = [
  {
    id: 1,
    title: "Férias no Algarve",
    image: "images/algarve.jpg",
  },

  {
    id: 2,
    title: "Natal Juntos",
    image: "images/natal.jpg",
  },

  {
    id: 3,
    title: "Concerto Favorito",
    image: "images/concerto.jpg",
  },

  {
    id: 4,
    title: "Viagem ao Porto",
    image: "images/porto.jpg",
  },
];

const container = document.getElementById("movies-container");

movies.forEach((movie) => {
  container.innerHTML += `
    
        <div class="card" onclick="openMovie(${movie.id})">

            <img src="${movie.image}">

            <h3>${movie.title}</h3>

        </div>

    `;
});

function openMovie(id) {
  localStorage.setItem("currentMovie", id);

  window.location = `movie.html?id=${id}`;
}
