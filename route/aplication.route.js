import { Router } from"express"

export const appRoute = Router()
    appRoute
        .get("/", (req,res)=>res.send({mesagge: "hola mundo"}))
        