// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos () {
    return  [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

// Datos para la busqueda 
let datosBusqueda = {
    marca: '',
    year: '', 
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''

}

// Evenet Listener DOM Loaded

const autos = obtenerAutos();
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

// Event Listener para el formulario
const marca = document.querySelector('#marca');
marca.addEventListener('input' , e => {
    datosBusqueda.marca = e.target.value;
    // Manadar a llamar la funcion de filtrar autos
    filtrarAuto();
});

const year = document.querySelector('#year');
year.addEventListener('input' , e => {
    datosBusqueda.year = Number(e.target.value) ;
    // Manadar a llamar la funcion de filtrar autos
    filtrarAuto();
});
const minimo = document.querySelector('#minimo');
minimo.addEventListener('input' , e => {
    datosBusqueda.minimo = Number(e.target.value) ;
    // Manadar a llamar la funcion de filtrar autos
    filtrarAuto();
});
const maximo = document.querySelector('#maximo');
maximo.addEventListener('input' , e => {
    datosBusqueda.maximo = Number(e.target.value) ;
    // Manadar a llamar la funcion de filtrar autos
    filtrarAuto();
});
const puertas = document.querySelector('#puertas');
puertas.addEventListener('input' , e => {
    datosBusqueda.puertas = Number(e.target.value) ;
    // Manadar a llamar la funcion de filtrar autos
    filtrarAuto();
});
const transmision = document.querySelector('#transmision');
transmision.addEventListener('input' , e => {
    datosBusqueda.transmision = e.target.value ;
    // Manadar a llamar la funcion de filtrar autos
    filtrarAuto();
});
const color = document.querySelector('#color');
color.addEventListener('input' , e => {
    datosBusqueda.color = e.target.value ;
    // Manadar a llamar la funcion de filtrar autos
    filtrarAuto();
});

function limpiarHTML () {
    //leer el elemento resultado
    const contenedor = document.querySelector('#resultado');

    // limpiar resultados anteriores
    
    contenedor.textContent = '';

}

function mostrarAutos(autos){
    
    limpiarHTML();
      //leer el elemento resultado
      const contenedor = document.querySelector('#resultado');
    
    //Construir HTML de los resultados
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p> ${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puerta} Puertas - Transmisión: ${auto.transmision} - Precio : ${auto.precio} - Color: ${auto.color} </p> 
        `;
        contenedor.appendChild(autoHTML);
    })
}

    // en caso de que no  haya un resultado
    function noResultado() {
        limpiarHTML();
        
        const noResultado = document.createElement('div');
        noResultado.classList.add('alerta', 'error');
        noResultado.appendChild(document.createTextNode('No hay resultados'));
        document.querySelector('#resultado').appendChild(noResultado);
    }

function filtrarAuto() {
    //Filter se puede usar varias vcs
    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor); 
    
    
    if(resultado.length) {
        mostrarAutos(resultado)
    }else {
        noResultado();
    }
    
}

// Funcion argumento de filter
function filtrarMarca(auto) {
    //si hay algo en la propiedad marca de el objeto que creamos 
    if(datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
        
    }else {
        //sino hay nada 
        return auto;
    }
}
function filtrarYear(auto) {
    //si hay algo en la propiedad marca de el objeto que creamos 
    if(datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
        
    }else {
        //sino hay nada 
        return auto;
    }
}
function filtrarMinimo(auto) {
    //si hay algo en la propiedad marca de el objeto que creamos 
    if(datosBusqueda.minimo) {
        return auto.precio <= datosBusqueda.minimo;
        
    }else {
        //sino hay nada 
        return auto;
    }
}
function filtrarMaximo(auto) {
    //si hay algo en la propiedad marca de el objeto que creamos 
    if(datosBusqueda.maximo) {
        return auto.precio <= datosBusqueda.maximo;
        
    }else {
        //sino hay nada 
        return auto;
    }
}

function filtrarPuertas(auto) {
    //si hay algo en la propiedad marca de el objeto que creamos 
    if(datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
        
    }else {
        //sino hay nada 
        return auto;
    }
}

function filtrarTransmision(auto) {
    //si hay algo en la propiedad marca de el objeto que creamos 
    if(datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
        
    }else {
        //sino hay nada 
        return auto;
    }
}

function filtrarColor(auto) {
    //si hay algo en la propiedad marca de el objeto que creamos 
    if(datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
        
    }else {
        //sino hay nada 
        return auto;
    }
}











