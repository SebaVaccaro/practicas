import Joi from 'joi';

export const mixedSchema = Joi.object({
    mixed: Joi.boolean().required().messages({
        'any.required': 'El campo mixed es requerido.'
    })  
});

