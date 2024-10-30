import { connectDB } from "./DB/connectDB.js";
import { server97 } from "./server.js";
try{
    await connectDB()
    server97.listen(3000, ()=>console.log("server97"))
}catch(err){
    console.log(err.message)
}