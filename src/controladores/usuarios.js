const knex = require('../conexao');
const bcrypt = require('bcrypt');
const cadastrarUsuario = async(req, res)=>{
    const {nome, email, senha} = req.body;

    try{
        const usuarioEmail = await knex('usuarios').where({email}).first();

        if(usuarioEmail){
            return res.status(400).json({mensagem: 'E-mail já cadastrado'});
        }
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const usuario = await knex('usuarios').insert({
            nome,
            email,
            senha: senhaCriptografada
        }).returning('*');

        const {senha:_, ...novoUsuario} = usuario[0];
        return res.status(201).json(novoUsuario);
    }catch(error){
        console.log(error)
        return res.status(500).json({mensagem: 'Erro interno no servidor'});
    }
}

module.exports = {cadastrarUsuario}