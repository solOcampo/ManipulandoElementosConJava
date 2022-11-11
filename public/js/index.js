let $ = (elemento) => document.querySelector(elemento)
let selectorAll = (elemento) => document.querySelectorAll(elemento)

let menu = $('main')
let subtitulo = $('h2')
let enlace = $('a')
let texto = selectorAll('p')
console.log(menu,subtitulo,enlace,texto);

let nombre = window.prompt('Ingrese su nombre')
if (!nombre) {
    subtitulo.innerText = 'Invitado'
} else {
    subtitulo.innerText = nombre
}
subtitulo.style.textTransform = "uppercase" //??
enlace.style.color = '#E51B3E'

if (window.confirm('¿Desea colocar un fondo de pantalla?')) {
    menu.classList.add('fondo')
}

for (let i = 0; i < texto.length; i++) { //agrega la clase pero no se muestran los estilos en el nav
    if (i % 2 == 0){
        texto[i].classList.add('destacadoPar')
    } else {
        texto[i].classList.add('destacadoImpar')
    }
}