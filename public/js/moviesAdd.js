console.log('Conexión exitosa');

const $ = (elemento) => document.querySelector(elemento)
const $all = (elemento) => document.querySelectorAll(elemento)

const h1 = $('h1')
const section = $('section')
const article = $('article')

h1.innerHTML += 'AGREGAS PELÍCULAS'

h1.classList.add('titulo')

article.classList.add('fondoTransparente')

section.classList.add('fondoCRUD')



