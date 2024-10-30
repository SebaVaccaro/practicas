import { publicationSchema } from "./schema/publication.schema.validator.js";

export const validatePublicationData = (schemaType, data) => {
    const options = {
        abortEarly: false,//detecta el primero, o sigue detectando errores
        allowUnknown: true,//permite entradas no pactadas
        stripUnknown: true//elimina las entradas no pactadas
    };

    const schema = publicationSchema[schemaType];
    //llama al schema correspondiente
    if (!schema) {
        throw new Error(`Schema type '${schemaType}' is not defined in publicationchema`);
    }
    //si no existe un schema, genera el error con el nombre del schema invalido

    const { error, value } = schema.validate(data, options);
    //valida datos
    
    if (error) {
        const detailedErrors = error.details.map(detail => ({
            message: detail.message,
            path: detail.path
        }));
        return { error: detailedErrors, value: null };
    }
    return { error: null, value };
};
