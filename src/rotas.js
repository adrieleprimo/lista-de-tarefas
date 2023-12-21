const express = require('express');
const { cadastrarUsuario } = require('./controladores/usuarios');
const validarRequisicao = require('./intermediarios/validacaoRequisicao');
const usuarioSchema = require('./validacoes/usuarios');
const rotas = express();

rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);


module.exports = rotas;