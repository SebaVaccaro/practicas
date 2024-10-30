import Joi from 'joi';

export const matchesSchema = Joi.object({
    matches: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).messages({
        'string.pattern.base': 'Cada match debe ser un ObjectId válido.'
    })
});

