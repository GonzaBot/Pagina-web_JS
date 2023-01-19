const espana = document.getElementById('esp');
const colombia = document.getElementById('col');
const mexico = document.getElementById('mex');

const nombre = document.getElementById('mapa');
const texto = document.getElementById('infpa');


const arreglo = document.querySelectorAll('li');
const imag = document.querySelector('img');

function activo(){
for(let i=0; i<arreglo.length; i++){
    arreglo[i].onclick = function(){
        arreglo[i].classList.add('activo');
        nombre.textContent = arreglo[i].textContent;
        quitarColor();
    }
}
}
function quitarColor(){
    if(nombre.textContent === "España"){
mexico.classList.remove('activo');
colombia.classList.remove('activo');
imag.setAttribute('src', 'img\\esp.png');
texto.textContent ="Espana es un pais de la peninsula hiberica que fue el colonizador en gran parte de america latina ";

    
    }else if(nombre.textContent === "Mexico"){
        espana.classList.remove('activo');
        colombia.classList.remove('activo');
        imag.setAttribute('src', 'img\\mex.png');
        texto.textContent ="Mexico es un pais de centroamerica que es caracterizado por su comida y cultura";

    }else if(nombre.textContent === "Colombia"){
        mexico.classList.remove('activo');
        espana.classList.remove('activo');
        imag.setAttribute('src', 'img\\col.png');
        texto.textContent ="Colombia es un pais de america latina que es caracterizado por su gente que siempre es muy calida y afectiva, y algo que tal vez ya saben jajaj";
    }
}
activo();