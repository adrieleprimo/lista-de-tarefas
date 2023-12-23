const express = require('express');
const { cadastrarUsuario, loginUsuario } = require('./controladores/usuarios');
const validarRequisicao = require('./intermediarios/validacaoRequisicao');
const usuarioSchema = require('./validacoes/usuarios');
const loginSchema = require('./validacoes/login');
const verificarUsuarioLogado = require('./intermediarios/autenticacao');
const rotas = express();

rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema),loginUsuario);

rotas.use(verificarUsuarioLogado);

module.exports = rotas;