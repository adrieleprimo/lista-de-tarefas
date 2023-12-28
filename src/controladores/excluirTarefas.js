const knex = require('../conexao');

const excluirTarefa = async(req, res)=>{
    const {id} = req.params;

    if (isNaN(id)){
        return res.status(400).json({ mensagem: 'Necessário informar um id válido.' });
    }

    try{
        const buscandoTarefa = await knex('tarefas').where({id}).first();

        if(!buscandoTarefa){
            return res.status(404).json({mensagem: 'Tarefa não localizada'});
        }
        const tarefa = await knex('tarefas').delete().where({id});
        return res.status(201).json({mensagem: 'Tarefa excluída com sucesso'});
    }catch(error){
        return res.status(500).json({mensagem: 'Erro interno no servidor'});
    }
}
module.exports = excluirTarefa;