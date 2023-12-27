const express = require('express');
const { cadastrarUsuario, loginUsuario } = require('./controladores/usuarios');
const validarRequisicao = require('./intermediarios/validacaoRequisicao');
const usuarioSchema = require('./validacoes/usuarios');
const loginSchema = require('./validacoes/login');
const verificarUsuarioLogado = require('./intermediarios/autenticacao');
const cadastrarTarefa = require('./controladores/cadastrarTarefas');
const tarefaSchema = require('./validacoes/tarefas');
const rotas = express();

rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema),loginUsuario);

rotas.use(verificarUsuarioLogado);

rotas.post('/tarefa', validarRequisicao(tarefaSchema), cadastrarTarefa);

module.exports = rotas;