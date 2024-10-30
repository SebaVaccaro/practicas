import { addMatchesPublicationController } from "./publication/addMatches.publication.controller.js";
import { addRequestPublicationController } from "./publication/addRequests.publication.controller.js";
import { changePublicDataController } from "./publication/changePublicData.publication.controller.js";
import { changeStatePublicationController } from "./publication/changeState.publication.controller.js";
import { createPublicationController } from "./publication/create.publication.controller.js";
import { deleteMatchesPublicationController } from "./publication/deleteMatches.publication.controller.js";
import { deleteRequestsPublicationController } from "./publication/deleteRequests.publication.controller.js";
import { getPublicationController } from "./publication/get.publication.controller.js";

export const publicationController = {
    addMatchesPublicationController,
    addRequestPublicationController,
    changePublicDataController,
    changeStatePublicationController,
    createPublicationController,
    deleteRequestsPublicationController,
    deleteMatchesPublicationController,
    getPublicationController
}
