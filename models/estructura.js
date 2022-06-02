const {Schema, model} =require('mongoose');
const MovesSchema =Schema({
    id:{
        type:String,
        require: [true, 'Campo obligatorio'],
        unique:false

    },
    nombre:{
        type:String,
        require: [true, 'Campo obligatorio'],
    },
     protagonista:{
        type:String,
        require: [true, 'Campo obligatorio'],
     },
     año:{
        type:Number,
        require: [true, 'Campo obligatorio'],
     },
     descripcion:{
        type:String,
        require: [true, 'Campo obligatorio'],
     }
});

const harry =model('favorita', MovesSchema);

module.exports = {
harry
}