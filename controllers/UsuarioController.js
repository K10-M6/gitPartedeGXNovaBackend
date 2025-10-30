const { Usuario } = require('../models');

const UsuarioController = {
  async prueba(req, res){
    res.json({"mensaje":"hola, esta es prueba"})
  },
  async getUsuarios(req, res){
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
  },
};

module.exports = UsuarioController;
