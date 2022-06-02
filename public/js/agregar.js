const socket = io();
const add = document.querySelector("#add");

add.addEventListener('click', () => {
    const nombre=document.querySelector("#nombre").value;
    const protagonista=document.querySelector("#protagonista").value;
    const anio=document.querySelector("#anio").value;
    const descripcion=document.querySelector("#descripcion").value;
    
    const registro = ({
        id: 10,
        nombre,
        protagonista,
        anio,
        descripcion
    });

      socket.emit('agregar-registro', registro, (callback) => { 
          console.log(callback);
      });
    console.log(registro);
}) 