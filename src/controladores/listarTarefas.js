const knex = require('../conexao');

const listarTarefas = async(req, res)=>{
    try{
        const tarefas = await knex('tarefas');
        return res.status(200).json(tarefas);
    }catch(error){
        return res.status(500).json({mensagem: 'Erro interno no servidor'});
    }
}

module.exports = listarTarefas;