import Joi from 'joi';

const createPublication = Joi.object({
    createdBy: Joi.string().required().messages({
        'string.empty': 'El campo createdBy es requerido.',
        'any.required': 'El campo createdBy es requerido.'
    }),
    type: Joi.string().valid('alquiler', 'venta').required().messages({
        'string.empty': 'El campo type es requerido.',
        'any.required': 'El campo type es requerido.',
        'any.only': 'El campo type debe ser "alquiler" o "venta".'
    }),
    publicData: Joi.object({
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
        }),
        rentalType: Joi.string().valid('habitacion', 'apartamento', 'casa').required().messages({
            'string.empty': 'El campo rentalType es requerido.',
            'any.required': 'El campo rentalType es requerido.',
            'any.only': 'El campo rentalType debe ser "habitacion", "apartamento" o "casa".'
        }),
        sharedRoom: Joi.boolean().required().messages({
            'any.required': 'El campo sharedRoom es requerido.'
        }),
        mixed: Joi.boolean().required().messages({
            'any.required': 'El campo mixed es requerido.'
        }),
        pets: Joi.boolean().required().messages({
            'any.required': 'El campo pets es requerido.'
        })
    }).required(),
    requests: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).messages({
        'string.pattern.base': 'Cada request debe ser un ObjectId válido.'
    }),
    matches: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).messages({
        'string.pattern.base': 'Cada match debe ser un ObjectId válido.'
    }),
    publicationState: Joi.string().valid('activo', 'inactivo').required().messages({
        'string.empty': 'El campo publicationState es requerido.',
        'any.required': 'El campo publicationState es requerido.',
        'any.only': 'El campo publicationState debe ser "activo" o "inactivo".'
    }),
    createdAt: Joi.date().iso().required().messages({
        'date.base': 'El campo createdAt debe ser una fecha válida.',
        'any.required': 'El campo createdAt es requerido.'
    })
});

export default createPublication;
