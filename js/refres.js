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


//Refresca para mostrar la opción buscada
function recargar(index) {
  const contenidoNuevo = document.querySelector('#movies');
  let onlyitem = '';

  if (textBusqueda !== "") {
    fetch(apiSearch)
    .then(function (response) {
      return response.json();
    })
    .then(function(refres) {
      console.log (refres.Search[index].Title);
      onlyitem = `https://www.omdbapi.com/?t=`+`${refres.Search[index].Title}`+`&apikey=6ede1f9f`;
      // console.log (onlyitem);
      fetch(onlyitem)
        .then(function (response2) {
          return response2.json();
        })
        .then(function (refres2) {
          const intro = document.getElementById("introduccion");
          intro.style.display = 'none';
          console.log(refres2);
          let actores = refres2.Actors;
          let arrayActores = actores.split(',');
          actores = '';
          for (let i = 0; i < 3; i++) {
            if (i === 0) {
              actores += arrayActores[i]
            } else {
              actores += ', ' + arrayActores[i]
            }
          }
          contenidoNuevo.innerHTML =
            `<div class='col-4 py-3'>
                <div class='card align-items-center flex-column h-100'>
                  <img src='${refres2.Poster}' class='card-img-top poster'>
                  <div class='card-body mt-auto p-2'>
                    <h6 class='card-title'>${refres2.Title}</h6>
                    <span class='card-title'>
                      <p class='mb-0' id='rating'><b>Rating: </b>${refres2.imdbRating}</p>
                      <p class='mb-0' id='actores'><b>Actores: </b>${actores}</p>
                    </span>
                  </div>
                </div>
              </div>`;
          refresInicio();
        })
    })
  }
  
  else {
    fetch(api)
      .then(function (response) {
        return response.json();
      })
      .then(function(refres) {
        console.log (refres.Search[index].Title);
        onlyitem = `https://www.omdbapi.com/?t=`+`${refres.Search[index].Title}`+`&apikey=6ede1f9f`;
        // console.log (onlyitem);
        
        fetch(onlyitem)
          .then(function (response2) {
            return response2.json();
          })
          .then(function (refres2) {
            const intro = document.getElementById("introduccion");
            intro.style.display = 'none';
            console.log(refres2);
            let actores = refres2.Actors;
            let arrayActores = actores.split(',');
            actores = '';
            for (let i = 0; i < 3; i++) {
              if (i === 0) {
                actores += arrayActores[i]
              } else {
                actores += ', ' + arrayActores[i]
              }
            }
            contenidoNuevo.innerHTML = 
              `<div class='col-4 py-3'>
                <div class='card align-items-center flex-column h-100'>
                  <img src='${refres2.Poster}' class='card-img-top poster'>
                  <div class='card-body mt-auto p-2'>
                    <h6 class='card-title'>${refres2.Title}</h6>
                    <span class='card-title'>
                      <p class='mb-0' id='rating'><b>Rating: </b>${refres2.imdbRating}</p>
                      <p class='mb-0' id='actores'><b>Actores: </b>${actores}</p>
                    </span>
                  </div>
                </div>
              </div>`;
            refresInicio();
          })
      })
  }
}


// function ocultar() {
//   document.getElementById('search').style.display = 'none';
//   document.getElementById('coinsidencias').style.display = 'none';
// }
// function ver() {
//   document.getElementById('search').style.display = 'block';
//   document.getElementById('coinsidencias').style.display = 'block';
// }

// //Paginación
// $(document).ready(function() {
//   $('#movies').pageMe({
//     pagerSelector: '#page',
//     showPrevNext: true,
//     hidePageNumbers: false,
//     perPage: 3
//   });
// });