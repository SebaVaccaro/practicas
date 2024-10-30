import { changeStatePublicationService } from "../../service/publication/changeState.publication.service.js"

export const changeStatePublicationController = async (req, res) => {y
    try{
        await changeStatePublicationService(req)
        res.status(200).send("change state publication succesfull")
    }catch(err){
       console.log(err)
       res.send(err) 
    }
}