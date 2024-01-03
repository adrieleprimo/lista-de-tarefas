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
const excluirTarefa = require('./controladores/excluirTarefas');
const concluirTarefa = require('./controladores/concluirTarefas');
const rotas = express();

rotas.post('/usuario', validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchema),loginUsuario);

rotas.use(verificarUsuarioLogado);

rotas.post('/tarefa', validarRequisicao(tarefaSchema), cadastrarTarefa);
rotas.put('/tarefa/:id/concluir', concluirTarefa);
rotas.get('/tarefa', visualizarTarefas);
rotas.put('/tarefa/:id', validarRequisicao(tarefaSchema), atualizarTarefa);
rotas.delete('/tarefa/:id', excluirTarefa);
module.exports = rotas;