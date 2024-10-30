import Joi from 'joi';

export const petsSchema = Joi.object({
    pets: Joi.boolean().required().messages({
        'any.required': 'El campo pets es requerido.'
    }) 
});

