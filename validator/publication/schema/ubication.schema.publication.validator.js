import Joi from 'joi';

export const ubicationSchema = Joi.object({
    departamento: Joi.string().required().messages({
        'string.empty': 'El campo departamento es requerido.',
        'any.required': 'El campo departamento es requerido.'
    }),
    ciudad: Joi.string().required().messages({
        'string.empty': 'El campo ciudad es requerido.',
        'any.required': 'El campo ciudad es requerido.'
    }),
    barrio: Joi.string().required().messages({
        'string.empty': 'El campo barrio es requerido.',
        'any.required': 'El campo barrio es requerido.'
    })
});
