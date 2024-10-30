import createPublication from "./create.schema.publication.validator.js";
import { idSchema } from "./id.sechema.publication.validator.js";
import { matchesSchema } from "./matches.schema.publication.validator.js";
import { mixedSchema } from "./mixed.schema.publication.validator.js";
import { petsSchema } from "./pets.schema.publication.validator.js";
import { rentalTypeSchema } from "./rentalType.schema.publication.validate.js";
import { requestSchema } from "./request.schema.publication.validator.js";
import { sharedRoomSchema } from "./sharedRoom.schema.publication.validator.js";
import { stateSchema } from "./state.schema.publication.validator.js";
import { typePublicationSchema } from "./type.schema.publication.validator.js";
import { ubicationSchema } from "./ubication.schema.publication.validator.js";

export const publicationSchema = {
    create: createPublication,
    matches: matchesSchema,
    mixed: mixedSchema,
    pets: petsSchema,
    rentalType: rentalTypeSchema,
    request: requestSchema,
    sharedRoom: sharedRoomSchema,
    state: stateSchema,
    type: typePublicationSchema,
    ubication: ubicationSchema,
    id: idSchema
}