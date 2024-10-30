import Joi from 'joi';

export const sharedRoomSchema = Joi.object({
    sharedRoom: Joi.boolean().required().messages({
        'any.required': 'El campo sharedRoom es requerido.'
    })    
});

