const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const app=express()
const connectDb=require("./config/db")

connectDb()
dotenv.config()

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
