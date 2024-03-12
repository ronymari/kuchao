let contador = 0

const formulario = document.getElementById("buscador")
const contenedorHTML = document.getElementById("contenedor")


fetch("./Json/database.json")
    .then(response => response.json())
    .then(data => {
        for(const producto of data){
            contenedorHTML.innerHTML += `
            <div class="carta" id="carta-${contador}">
                <img src=${producto.img}>
                <h2 class="titulo-producto" id="comparador-${contador}">${producto.name}</h2>
                <p><strong>MOTOR: </strong>${producto.motor}</p>
                <p><strong>POTENCIA: </strong>${producto.hp}CV</p>
                <p><strong>TRANSMISION: </strong>${producto.transmision}</p>
                <p><strong>PESO: </strong>${producto.peso}kg</p>
                <h3><strong>VALOR: </strong>${producto.price}€</h3>
                <a href=${producto.url} target="_blank">Saber Mas</a>
            </div>

        
            `
            contador ++
        }
    })


    const filtrar = () => {
        const buscar = formulario.value.toLowerCase()
        for(let i = 0; i < contador; i++){
            const carta = document.getElementById("carta-"+i)
            const comparador = document.getElementById("comparador-"+i)
            let nombre = comparador.innerHTML.toLowerCase()
            if(nombre.indexOf(buscar) === -1){
                carta.style.display = "none";
            } else if (nombre.indexOf(buscar) !== -1){
                carta.style.display = "flex";
            }}
    }
    formulario.addEventListener('keyup',filtrar)
