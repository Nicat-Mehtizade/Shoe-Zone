const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config()

function connectDB(){
    const db=process.env.CONNECT_DB.replace("<db_password>", process.env.PASSWORD)
    mongoose.connect(db)
    .then(()=>console.log("Connected to MongoDB"))
    .catch((error)=>console.log(error))
}

module.exports=connectDB