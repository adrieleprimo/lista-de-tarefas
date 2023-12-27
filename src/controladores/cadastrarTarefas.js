const knex = require('../conexao');
const {format, toDate} = require('date-fns');
const cadastrarTarefa = async(req, res)=>{
    const {titulo, descricao, data_conclusao} = req.body;
    try{
        const tarefaTitulo = await knex('tarefas').where({titulo}).first();
        if(tarefaTitulo){
            return res.status(400).json({mensagem: 'Tarefa já registrada'});
        }
        const dataAjustada = format(toDate(data_conclusao,{additionalDigits:2}), 'yyyy-MM-dd');
        const tarefa = await knex('tarefas').insert({
            titulo,
            descricao,
            data_conclusao: dataAjustada
        }).returning('*');
        return res.status(201).json(tarefa);
    }catch(error){
        return res.status(500).json({mensagem: 'Erro interno do servidor.'});
    }
}

module.exports = cadastrarTarefa;