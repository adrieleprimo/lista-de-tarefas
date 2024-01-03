const knex = require('../conexao');

const concluirTarefa = async (req, res)=>{
    const {id} = req.params;

    if (isNaN(id)){
        return res.status(400).json({ mensagem: 'Necessário informar um id válido.' });
    }

    try{
        const tarefa = await knex ('tarefas').where({id}).first();
        if(!tarefa){
            return res.status(404).json({mensagem: 'Tarefa não encontrada'});
        }
        if(tarefa.concluido === 'sim'){
            return res.status(400).json({mensagem: 'Tarefa já concluída'});
        }
        await knex('tarefas').where({id}).update({
            concluido: 'sim'
        });

        const tarefaAtualizada = await knex('tarefas').where({id}).first();
        return res.status(200).json(tarefaAtualizada);

    }catch(error){
        return res.status(500).json({mensagem: 'Erro interno no servidor'});
    }
}
module.exports = concluirTarefa;