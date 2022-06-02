const socket = io();

const containerMovie = document.querySelector("#containerMovie");
const btnEdit = document.querySelector("#btnEdit");
const btnUpdate = document.querySelector("#btnUpdate");

btnEdit.addEventListener('click', () => {
    // alert(true)
    const _id = document.querySelector("#textEdit").value;
    // alert(_id);
    socket.emit('listado-peliculas2', _id, (callback) => {
        console.log(callback);
        const { _id, id, nombre, protagonista, año, descripcion } = callback;
        document.querySelector("#btnUpdate").setAttribute("class", _id);
        document.querySelector("#nombre").value = nombre;
        document.querySelector("#protagonista").value = protagonista;
        document.querySelector("#anio").value = año;
        document.querySelector("#descripcion").value = descripcion;
    });
})
btnUpdate.addEventListener('click', () => {
    const nombre = document.querySelector("#nombre").value;
    const protagonista = document.querySelector("#protagonista").value;
    const año = document.querySelector("#anio").value;
    const descripcion = document.querySelector("#descripcion").value;
    const _id = document.querySelector("#btnUpdate").className;
    const valores = ({
        _id,
        nombre,
        protagonista,
        año,
        descripcion
    })

    socket.emit('update-peliculas2', valores, (callback) => {
        console.log(callback);
    })
})

socket.on('listado-peliculas', (listado, callback) => {
   for(let i = 0; i<listado.length; i++){
       const { _id, id, nombre, protagonista, año, descripcion } = listado[i];
       const div = document.createElement("div");
       const br = document.createElement("br");
       let p = document.createTextNode(nombre);
       div.appendChild(p);
       div.appendChild(br);
       p = document.createTextNode(_id);
       div.appendChild(p);
       containerMovie.appendChild(div);
   }
console.log(listado)
   return callback(
       "Yes"
       )
})