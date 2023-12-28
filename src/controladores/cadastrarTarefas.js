const knex = require('../conexao');
const {format, toDate} = require('date-fns');
const cadastrarTarefa = async(req, res)=>{
    const {titulo, descricao, data_conclusao, usuario_id, concluido} = req.body;
    try{
        const usuario = await knex('usuarios').where({id:usuario_id}).first();
        if(!usuario){
            return res.status(404).json({mensagem: 'Usuário não localizado'});
        }
        const tarefaTitulo = await knex('tarefas').where({titulo}).first();
        if(tarefaTitulo){
            return res.status(400).json({mensagem: 'Tarefa já registrada'});
        }
        const dataAjustada = format(toDate(data_conclusao,{additionalDigits:2}), 'yyyy-MM-dd');
        const tarefa = await knex('tarefas').insert({
            titulo,
            descricao,
            data_conclusao: dataAjustada,
            usuario_id,
            concluido
        }).returning('*');
        return res.status(201).json(tarefa);
    }catch(error){
        console.log(error)
        return res.status(500).json({mensagem: 'Erro interno do servidor.'});
    }
}

module.exports = cadastrarTarefa;