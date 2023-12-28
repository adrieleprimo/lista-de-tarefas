const knex = require('../conexao');

const visualizarTarefas = async (req, res)=>{
    const {id} = req.usuario;

    try{
        const tarefas = await knex('tarefas').where({usuario_id: id});
        return res.status(200).json(tarefas);
    }catch(error){
        return res.status(500).json({mensagem: 'Erro interno no servidor'});
    }
}

module.exports = visualizarTarefas;