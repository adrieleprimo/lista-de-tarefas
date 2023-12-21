const express = require('express');
const { cadastrarUsuario, loginUsuario } = require('./controladores/usuarios');
const validarRequisicao = require('./intermediarios/validacaoRequisicao');
const usuarioSchema = require('./validacoes/usuarios');
const loginSchema = require('./validacoes/login');
const rotas = express();

rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema),loginUsuario);


module.exports = rotas;