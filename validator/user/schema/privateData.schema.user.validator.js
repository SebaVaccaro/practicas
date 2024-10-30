import Joi from "joi";
export const privateData = Joi.object({
    phonenumber: Joi.string()
        .pattern(new RegExp('^[0-9]{6,15}$'))
        .messages({
            'string.pattern.base': 'El número de teléfono debe contener entre 10 y 15 dígitos.'
        })
});


