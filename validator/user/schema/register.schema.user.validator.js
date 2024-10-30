import Joi from 'joi';

export const registerUserSchema = Joi.object({
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
        }),
    repeat_password: Joi.any()
        .valid(Joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Las contraseñas no coinciden.',
            'any.required': 'La confirmación de la contraseña es requerida.'
        }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.email': 'El correo electrónico debe ser válido.',
            'any.required': 'El correo electrónico es requerido.'
        }),
    publicData: Joi.object({
        nickname: Joi.string()
            .alphanum()
            .min(4)
            .max(10)
            .required()
            .messages({
                'string.alphanum': 'El apodo solo puede contener caracteres alfanuméricos.',
                'string.min': 'El apodo debe tener al menos 4 caracteres.',
                'string.max': 'El apodo no puede tener más de 10 caracteres.',
                'any.required': 'El apodo es requerido.'
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
                'any.required': 'El año de nacimiento es requerido.'
            }),
        gender: Joi.string()
            .alphanum()
            .required()
            .messages({
                'string.alphanum': 'El género solo puede contener caracteres alfanuméricos.',
                'any.required': 'El género es requerido.'
            })
    }).required(),
    privateData: Joi.object({
        phonenumber: Joi.string()
            .pattern(new RegExp('^[0-9]{6,15}$'))
            .required()
            .messages({
                'string.pattern.base': 'El número de teléfono debe contener entre 10 y 15 dígitos.',
                'any.required': 'El número telefónico es requerido.'
            })
    }).required()
});
