import Joi from 'joi';

export const passwordSchema = Joi.object({
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .messages({
            'string.pattern.base': 'La contraseña debe contener solo caracteres alfanuméricos y tener entre 3 y 30 caracteres.'
        }),
    repeat_password: Joi.any()
        .valid(Joi.ref('password'))
        .messages({
            'any.only': 'Las contraseñas no coinciden.'
        })

});