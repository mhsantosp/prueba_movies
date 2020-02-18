//Consumo de la API
const api = `https://www.omdbapi.com/?s=movies&apikey=6ede1f9f`

//Contenido inicial
const contenido = document.querySelector('#movies');
fetch(api)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    let cantidad = Object.keys(myJson.Search).length;
    while (!(cantidad % 3 === 0)) {
      cantidad = cantidad - 1;
    }

    for (let i = 0; i < cantidad; i++) {
      console.log(myJson.Search[i]);
      contenido.innerHTML += 
        `<div class='col-4 py-3'>
          <div class='card align-items-center flex-column h-100'>
            <img src='${myJson.Search[i].Poster}' class='card-img-top poster' onclick="recargar(${i})">
            <div class='card-body mt-auto p-2 d-flex' onclick="recargar(${i})">
              <h5 class='card-title'>${myJson.Search[i].Title}</h5>
            </div>
          </div>
        </div>`;
    }
  });

// Llena lista de peliculas
var filtro = document.querySelector('#listaBusqueda');
function traerOpcionesBusqueda () {
  fetch(api)
    .then(function (response) {
      return response.json();
  })
  .then(function(data) {
    let cantidadFiltro = Object.keys(data.Search).length;
    filtro.innerHTML = '';
    for (let i = 0; i < cantidadFiltro; i++) {
    console.log(data.Search[i]);
    filtro.innerHTML += 
      `<li id='contenidoLista' class="list-group-item d-flex" onclick="recargar(${i})">
        <span>
          <img id='fltPoster' src='${data.Search[i].Poster}'>
          ${data.Search[i].Title}
        </span>
      </li>`
    }
  })
}