import Joi from 'joi';

export const requestSchema = Joi.object({
    requests: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).messages({
        'string.pattern.base': 'Cada request debe ser un ObjectId válido.'
    })  
});

