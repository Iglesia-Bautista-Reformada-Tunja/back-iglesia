const express = require("express");

const administradores = express.Router();
const {login, listAdministradores} = require("../controllers/Administradores");


administradores.post('/login', login); //login es una variable



administradores.get('/', listAdministradores);
administradores.get('/welcome', (req, res) => {
    res.send('Bienvenido a la aplicación');
  });

 
 

module.exports = {
 administradores
}