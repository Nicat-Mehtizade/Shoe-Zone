const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const app=express()
const connectDb=require("./config/db")
const path = require("path");
const productRouter=require("./routes/productRoute")
connectDb()
dotenv.config()

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
)

app.use("/api/product",productRouter)

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
