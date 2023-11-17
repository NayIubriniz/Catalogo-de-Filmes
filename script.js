function adicionarFilme(){
   var filmeFavorito = document.getElementById('filme').value
   var elementoListaFilmes = document.getElementById('listaFilmes')
      elementoListaFilmes.innerHTML =`${elementoListaFilmes.innerHTML} <img class="catalogo" src= ${filmeFavorito}>`
    document.getElementById('filme').value = '';
    
}
