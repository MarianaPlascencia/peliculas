const { harry } = require('../models/estructura.js');


const socketController = (socket) => {

    const recopilar = async () =>{
        const todos = await harry.find();
        // console.log(todos);
        socket.emit('listado-peliculas', todos, (callback) => {
            console.log(callback);
        })
    }
    recopilar();
    console.log('Cliente conectado', socket.id );
    socket.on('listado-peliculas2', (_id,callback) => {
        const recopilar = async () =>{
            const todos = await harry.findById(_id);
            // console.log(todos);
            return callback(
                todos
            )
        }
        recopilar();
    })
    socket.on('update-peliculas2', (valroes,callback) => {
        const { _id, nombre, protagonista, año, descripcion } = valroes;
        harry.findByIdAndUpdate(_id, {nombre:nombre, protagonista:protagonista, año:año, descripcion:descripcion}, function (err,docs) {
            if(err){
                console.log(err);
            } else {
                console.log(docs);
                return callback(
                    docs
                )
            }
        })
    })

    socket.on('delete-peliculas', (_id, callback) => {
        // console.log(_id);
        harry.findByIdAndDelete(_id, function (err, docs) {
            if(err){
                console.log("Error al Eliminar la data.")
                return callback (
                    err
                )
            } else {
                console.log("Elemento Borrado: ", docs)
                return callback(
                    docs
                )
            }
        })
        
    })

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id );
    });

    socket.on('enviar-mensaje', ( payload, callback ) => {
        
        const id = 123456789;
        
        socket.broadcast.emit('enviar-mensaje', payload );
        callback( id );
        socket.emit('enviar-mensaje', payload);
    }) 
    socket.on('agregar-registro', (registro, callback) => {
        const {id, nombre, protagonista, anio, descripcion} = registro;
        const año = anio;
        harry.create({
            id, nombre, protagonista, año, descripcion

        }
        )
        return callback (
            "se registró: ", registro
        );
    });
}



module.exports = {
    socketController
}

