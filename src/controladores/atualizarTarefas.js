const knex = require('../conexao');

const atualizarTarefa = async( req, res)=>{
    const {id} = req.params;
    const {titulo, descricao, data_conclusao, concluido} = req.body;
    if (isNaN(id)){
        return res.status(400).json({ mensagem: 'Necessário informar um id válido.' });
    }
    try{
        const buscandoTarefa = await knex('tarefas').where({id}).first();
        if(!buscandoTarefa){
            return res.status(404).json({mensagem: 'Tarefa não encontrada'});
        }
        const tarefa = await knex('tarefas').update({
            titulo,
            descricao,
            data_conclusao,
            concluido
        }).where({id}).returning('*');
        return res.status(200).json(tarefa[0]);
    }catch(error){
        return res.status(500).json({mensagem: 'Erro interno no servidor'});
    }
}

module.exports = atualizarTarefa;