import Joi from "joi";

export const loginUserSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(4)
        .max(10)
        .required()
        .messages({
            'string.alphanum': 'El nombre de usuario solo puede contener caracteres alfanuméricos.',
            'string.min': 'El nombre de usuario debe tener al menos 4 caracteres.',
            'string.max': 'El nombre de usuario no puede tener más de 10 caracteres.',
            'any.required': 'El nombre de usuario es requerido.'
        }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()
        .messages({
            'string.pattern.base': 'La contraseña debe contener solo caracteres alfanuméricos y tener entre 3 y 30 caracteres.',
            'any.required': 'La contraseña es requerida.'
        })
})