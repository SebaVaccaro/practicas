import Joi from 'joi';

export const stateSchema = Joi.object({
    publicationState: Joi.string().valid('activo', 'inactivo').required().messages({
        'string.empty': 'El campo publicationState es requerido.',
        'any.required': 'El campo publicationState es requerido.',
        'any.only': 'El campo publicationState debe ser "activo" o "inactivo".'
    })
});

