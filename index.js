const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const db = require("./database/db");
const imagesRoutes = require("./routes/images");
const librosRoutes = require("./routes/libros");

const {administradores} = require("./routes/administradores");//desestructurar
//const { libros } = require("./routes/libros")


const pdfsRoutes = require("./routes/pdfs");
const cors = require("cors");
const { config } = require("dotenv");


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));


//app.use('/libros', libros)

app.use('/images', express.static('./images'));  //muestra file planos
app.use('/api/images', imagesRoutes);   // app imagemultiples

app.use('/api/pagination', librosRoutes)

app.use('/libros', express.static('./libros'));
app.use('/api/libros', librosRoutes);   // app articulos



app.use('/pdfs', express.static('./pdfs')); //static text.txt
app.use('/api/pdfs', pdfsRoutes);

app.use('/administradores', administradores);//la segunda admis es una variable

// Ruta raíz
app.get('/', (req, res) => {
    res.send('¡Hola, esta es la página de inicio de mi aplicación!');
  });


 /* 
app.listen(config.port, () => {
    console.log("Server listening on port ", config.port);
});
*/

app.listen(port, () => {
    console.log("Server listening on port " + process.env.PORT);
});



/* 
app.listen(port,()=>{
    console.log("server listening on port " + port);
})
*/