import Joi from 'joi';

export const idSchema = Joi.object({
    pets: Joi.string().required().messages({
        'any.required': 'El campo idSchema es requerido.'
    }) 
});

