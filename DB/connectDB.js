import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/prueba")
        console.log("db<<<")
    }catch(err){
        console.log(err)
    }

}