import Joi from 'joi';

export const rentalTypeSchema = Joi.object({
    rentalType: Joi.string().valid('habitacion', 'apartamento', 'casa').required().messages({
        'string.empty': 'El campo rentalType es requerido.',
        'any.required': 'El campo rentalType es requerido.',
        'any.only': 'El campo rentalType debe ser "habitacion", "apartamento" o "casa".'
    })
});

