const socket = io();
const container = document.querySelector("#containerPelicula");
const btnDelete = document.querySelector("#btnDelete");

socket.on('listado-peliculas', (listado, callback) => {
    console.log(listado);
    for(let i = 0; i<listado.length; i++){
        const { _id, id, nombre, protagonista, año, descripcion } = listado[i];
        const div = document.createElement("div");
        const br = document.createElement("br");
        let p = document.createTextNode(nombre);
        div.appendChild(p);
        div.appendChild(br);
        p = document.createTextNode(_id);
        div.appendChild(p);
        container.appendChild(div);
    }
    return callback(
        "Yes"
        )
    });

    btnDelete.addEventListener('click', () => {
        const _id = document.querySelector("#textDelete").value;
         console.log(textDelete);
        socket.emit('delete-peliculas', _id, (callback) => {
            console.log("Elemento Borrado: " , callback);
        })
    })