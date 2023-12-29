const mongoose = require("mongoose");

const connection = mongoose.createConnection(process.env.MONGOSRV, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connection.on('connected', () => {
  console.log("Conectado a MongoDB");
});

connection.on('error', (err) => {
  console.error("Error de conexión a MongoDB:", err);
});

module.exports = connection;




/*
const mongoose = require("mongoose");
const db = mongoose.connect(process.env.MONGOSRV).then(()=>{
    console.log("Conectado a mongodb")
}).catch((err)=>{
    console.log("ocurrio un error: "+err)
})


module.exports = {
    db
}

*/