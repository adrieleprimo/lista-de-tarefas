const knex = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaJwt = process.env.JWT_HASH;

const cadastrarUsuario = async(req, res)=>{
    const {nome, email, senha} = req.body;

    try{
        const usuarioEmail = await knex('usuarios').where({email}).first();

        if(usuarioEmail){
            return res.status(400).json({mensagem: 'E-mail já cadastrado.'});
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
        return res.status(500).json({mensagem: 'Erro interno no servidor.'});
    }
}

const loginUsuario = async (req, res)=>{
    const {email, senha} = req.body;

    try{
        const usuario = await knex('usuarios').where('email', email).first();

        if(!usuario){
            return res.status(400).json({mensagem: 'E-mail ou senha inválidos.'})
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);
        if(!senhaValida){
            return res.status(400).json({mensagem: 'E-mail ou senha inválidos.'});
        }
        const token = jwt.sign({id: usuario.id},senhaJwt, {expiresIn: '1d'});

        const {senha:_, usuarioLogado} = usuario;

        return res.status(200).json({
            usuario: usuarioLogado,
            token
        });

    }catch(error){
        return res.status(500).json({mensagem: 'Erro interno no servidor.'});
    }

}

module.exports = {cadastrarUsuario, loginUsuario}