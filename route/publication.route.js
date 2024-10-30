import { Router } from "express";
import { publicationController } from "../controller/publication.controller.js";
import { validateTokenAuthMiddlewares } from "../middlewares/auth/validateToken.auth.middlewares.js";
import { getDataMiddleware } from "../middlewares/data/get.data.middlewares.js";
import { tokenAndIdValidateMiddleware } from "../middlewares/validate/tokenAndId.validate.middlewares.js";
import { adminAuthMiddleware } from "../middlewares/auth/admin.auth.middlewares.js";
import { userOrAdminRequestsAuthMiddleware } from "../middlewares/auth/userOrAdminRequests.auth.middlewares.js";
import { userOrAdminMatchesAuthMiddleware } from "../middlewares/auth/userOrAdminMatches.auth.middlewares.js";
export const publicationRoutes = Router()

const {
    addMatchesPublicationController,
    addRequestPublicationController,
    changePublicDataController,
    changeStatePublicationController,
    createPublicationController,
    deleteRequestsPublicationController,
    deleteMatchesPublicationController,
    getPublicationController
} = publicationController


publicationRoutes
    .get("/publication/:id", getPublicationController)
    
    .post("/publication/create", createPublicationController)
    
    .put("/publication/:id/publicdata", tokenAndIdValidateMiddleware,validateTokenAuthMiddlewares, getDataMiddleware, adminAuthMiddleware,changePublicDataController)
    .put("/publication/state", tokenAndIdValidateMiddleware,validateTokenAuthMiddlewares, getDataMiddleware, adminAuthMiddleware,changeStatePublicationController)
    
    .post("/publication/:id/requests", tokenAndIdValidateMiddleware, validateTokenAuthMiddlewares, getDataMiddleware,addRequestPublicationController)
    .post("/publication/match", tokenAndIdValidateMiddleware, validateTokenAuthMiddlewares, getDataMiddleware, adminAuthMiddleware, addMatchesPublicationController)
    .put("/publication/:id/match", tokenAndIdValidateMiddleware, validateTokenAuthMiddlewares, getDataMiddleware, userOrAdminMatchesAuthMiddleware,deleteMatchesPublicationController)
    .put("/publication/:id/requests", tokenAndIdValidateMiddleware, validateTokenAuthMiddlewares, getDataMiddleware, userOrAdminRequestsAuthMiddleware, deleteRequestsPublicationController)