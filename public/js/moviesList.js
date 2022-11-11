console.log('Conexión exitosa');

const $ = (elemento) => document.querySelector(elemento)
const $all = (elemento) => document.querySelectorAll(elemento)

const cuerpo = $('body')
const h1 = $('h1')

const confirmacion = window.prompt('¡Desea modo oscuro?')
if (confirmacion == 'si') {
    cuerpo.style.backgroundColor = '#7f7f7f'
    cuerpo.classList.add('fondoMoviesList')
}

h1.innerText += 'LISTADO DE PELÍCULAS'
h1.style.color = 'white'
h1.style.backgroundColor = 'teal'
h1.style.padding = '20px'


