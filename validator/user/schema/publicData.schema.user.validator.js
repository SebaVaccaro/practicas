import Joi from "joi";

export const publicDataSchema = Joi.object({
    gender: Joi.string()
        .alphanum()
        .required()
        .messages({
            'string.alphanum': 'El género solo puede contener caracteres alfanuméricos.',
            'any.required': 'El genero de usuario es requerido.'
        }),
    age: Joi.number()
        .integer()
        .min(1900)
        .max(2006)
        .required()
        .messages({
            'number.base': 'La edad debe ser un número.',
            'number.integer': 'La edad debe ser un número entero.',
            'number.min': 'La edad debe ser al menos 1900.',
            'number.max': 'La edad no puede ser mayor a 2006.',
            'any.required': 'La edad de usuario es requerida.'
        }),
    nickname: Joi.string()
        .alphanum()
        .min(4)
        .max(10)
        .required()
        .messages({
            'string.alphanum': 'El apodo solo puede contener caracteres alfanuméricos.',
            'string.min': 'El apodo debe tener al menos 4 caracteres.',
            'string.max': 'El apodo no puede tener más de 10 caracteres.',
            'any.required': 'El nickname de usuario es requerido.'
        })
})