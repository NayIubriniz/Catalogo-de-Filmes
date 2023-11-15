var listafilmes = [

'https://upload.wikimedia.org/wikipedia/pt/e/e9/Junior_P%C3%B4ster.jpg', 'https://upload.wikimedia.org/wikipedia/pt/6/63/Pirates_of_the_Caribbean_-_On_Stranger_Tides.jpg','https://upload.wikimedia.org/wikipedia/pt/9/92/Goonies.jpg','https://upload.wikimedia.org/wikipedia/pt/a/ac/Beetlejuice_film_poster.jpg','https://upload.wikimedia.org/wikipedia/pt/3/31/Charlie_and_the_Chocolate_Factory.jpg?download'
]
    for (var i = 0; i < listafilmes.length; i++){
        document.write(`<img class="filme" src= ${listafilmes[i]}>`);
        
    }



