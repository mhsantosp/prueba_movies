//Refrescar dada a su estado inicial
function refresInicio() {
  const listaFiltro = document.getElementById("coinsidencias");
  listaFiltro.style.display = 'none';

  const listaSearch = document.getElementById("search");
  listaSearch.style.display = 'none';

  if (listaSearch.style.display == "block" && listaFiltro.style.display == "none") {
    listaFiltro.style.display = 'block';
    traerOpcionesBusqueda();
  }
}


//Refresca para mostrar la opción selecionada
function recargar(index) {
  const contenidoNuevo = document.querySelector('#movies');
  fetch(api)
    .then(function (response) {
      return response.json();
    })
    .then(function(refres) {
      const intro = document.getElementById("introduccion");
      intro.style.display = 'none';
      console.log(refres.Search[index]);
      contenidoNuevo.innerHTML = 
      `<div class='col-4 py-3'>
        <div class='card align-items-center flex-column h-100'>
          <img src='${refres.Search[index].Poster}' class='card-img-top poster'>
          <div class='card-body mt-auto p-2 d-flex'>
            <h5 class='card-title'>${refres.Search[index].Title}</h5>
          </div>
        </div>
      </div>`;
      refresInicio();
    })
}