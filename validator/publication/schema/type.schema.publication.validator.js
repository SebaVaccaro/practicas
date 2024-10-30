import Joi from 'joi';

export const typePublicationSchema = Joi.object({
    type: Joi.string().valid('alquiler', 'venta').required().messages({
        'string.empty': 'El campo type es requerido.',
        'any.required': 'El campo type es requerido.',
        'any.only': 'El campo type debe ser "alquiler" o "venta".'
    })
});

