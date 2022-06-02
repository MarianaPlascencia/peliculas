const mongoose=require('mongoose');
 const db =async() =>{
     try {
         await mongoose.connect('mongodb://localhost:27017/peliculas',{

         useNewUrlParser: true,
         useUnifiedTopology: true
         });

         console.log('Se conecto la base de datos');
     } catch(error) {
         console.log (error);
         throw new Error ('Hubo un error');
     }
 }

 module.exports = db();