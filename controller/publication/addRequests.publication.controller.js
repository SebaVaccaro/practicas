import { addPublicationRequestService } from "../../service/publication/addRequests.publication.service.js"

export const addRequestPublicationController = async (req, res) =>{
    try{
        await addPublicationRequestService(req)  
        res.status(200).send({message: "add request successfull"}) 
    }catch(err){
        console.log(err)
        res.status(500).send(err.message)
    }
}