let searchInput = document.getElementById('searchInput');
let albums = document.querySelectorAll('[data-title]');


searchInput.addEventListener('keyup', function(event) {
    const query = this.value;
    

    albums.forEach(album => {
        const title = album.getAttribute('data-title');

        if (title.includes(query) && query !== '') {
            album.classList.add('resaltar');
        } else {
            album.classList.remove('resaltar');
        }
    });
});

// Profe no funciona muy bien pero creo que esta bastante bien para ser un principiante, lo quise dejar igual a ver que opinabas