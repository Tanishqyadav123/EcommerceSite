const express = require("express")
require("dotenv").config()
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const ProductRouter = require("./routes/ProductRoute.js")
const UserRouter = require("./routes/UserRoute.js")
const CartRouter = require("./routes/CartRoute.js")
const cookieParser = require("cookie-parser")

//  PORT number 
const port = process.env.PORT




// Setting up the Backend :-
async function Main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/ShopperDB") 
}
Main()
.then((value) =>{
     console.log(`Database is connected successfully`)
})
.catch((error) =>{
     console.log(`Something went wrong while connecting with database:  ${error}`)
})



// Middleware :-
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended : true}))
app.use('/api/product' , ProductRouter)
app.use('/api/user' , UserRouter)
app.use('/api/cart' , CartRouter)


//  Image uploadation using Multer :-


const storage = multer.diskStorage({
    destination : "./upload/images",
    filename : (req , file , cb) =>{
         return cb(null , `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage : storage})

app.use('/images' , express.static("upload/images"))

app.post("/upload" , upload.single("product") ,function (req , res){
     console.log(req.file)
     res.json({
         success : true,
         image_url : `http://localhost:${port}/images/${req.file.filename}`
     })
})


 
app.get("/" , function (req , res){
     res.send("Express server is running...")
})


app.listen(port , () =>{
     console.log(`server is running on the port ${port}`)
})