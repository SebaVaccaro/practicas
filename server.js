import express from "express"
import { appRoute } from "./route/aplication.route.js"
import { userRoute } from "./route/user.route.js"
import { publicationRoutes } from "./route/publication.route.js"
export const server97 = express()
    
    server97
        .use(express.json())
        .use(appRoute)
        .use(userRoute)
        .use(publicationRoutes)