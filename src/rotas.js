const express = require('express');
const { cadastrarUsuario, loginUsuario } = require('./controladores/usuarios');
const validarRequisicao = require('./intermediarios/validacaoRequisicao');
const usuarioSchema = require('./validacoes/usuarios');
const loginSchema = require('./validacoes/login');
const verificarUsuarioLogado = require('./intermediarios/autenticacao');
const cadastrarTarefa = require('./controladores/cadastrarTarefas');
const tarefaSchema = require('./validacoes/tarefas');
const visualizarTarefas = require('./controladores/visualizarTarefas');
const atualizarTarefa = require('./controladores/atualizarTarefas');
const rotas = express();

rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema),loginUsuario);

rotas.use(verificarUsuarioLogado);

rotas.post('/tarefa', validarRequisicao(tarefaSchema), cadastrarTarefa);
rotas.get('/tarefa', visualizarTarefas);
rotas.put('/tarefa/:id', validarRequisicao(tarefaSchema), atualizarTarefa);
module.exports = rotas;