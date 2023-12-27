const joi = require('joi');

const tarefaSchema = joi.object({
    titulo: joi.string().required().trim().messages({
        'any.required': 'O campo titulo é obrigatório.',
        'string.empty': 'O campo titulo é obrigatório.',
    }),
    descricao: joi.string().trim().empty('').default(null).messages({
        'string.base': 'O campo descricao deve ser uma string.',
    }),
    data_conclusao: joi.string().trim().empty('').default(null).messages({
        'string.base': 'O campo data deve ser do tipo date.',
    })
})

module.exports = tarefaSchema;