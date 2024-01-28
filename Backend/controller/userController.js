const UserModel = require("../Models/UserModel.js")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//  User Register 
const Register = async (req , res) =>{
     
    try {
         const {username , email , password} = req.body;
        if (!username || !email || !password){
             return res.status(400).json({
                 success : true,
                 message : "Please Fill all the fields"
             })
        }

        //  Check whether the user with email already exist with the given email address :-
        const IsExist = await UserModel.findOne({email : req.body.email})

        if (IsExist){
             return res.status(400).json({
                 success : false,
                 message : "User already exist with this email"
             })
        }

        //   Create a cart for each user :-
        let cart = {}
        for (let i = 0; i < 300; i++){
             cart[i] = 0;
        }

    //     hashing the password before storing in the data base
        const salt = await bcrypt.genSalt (10)
        const HashPassword = await bcrypt.hash (req.body.password , salt)

        //  Otherwise create the user using the above details 
        const createdUser = await UserModel.create({
             username,
             email,
             password : HashPassword,
             cartData : cart
        })

      

        if (!createdUser){
             return res.status(400).json({
                 success : false,
                 message : "User could not be created"
             })
        }
        
        //  Generating the JWT token :-
        const token = jwt.sign({id : createdUser._id} , process.env.JWT_SECRET , {expiresIn : "3d"})

        res.cookie("token" , token).status(200).json({
             success : true,
             token,
             createdUser

        })


    }

    catch (error){
         
        res.status(500).json({
            success : true,
            message : error.message

       })
    }

}


//  Login Route :-
const Login = async (req , res) =>{
     
    try {

        const {email , password} = req.body;
        
        if (!email || !password){
            return res.status(400).json({
                 success : false,
                 message : "Please Fill all the fields"
            })
        }

        // Check any user with this email present or not
        const UserExist = await UserModel.findOne({
             email : req.body.email
        })

        if (!UserExist){
             return res.status(400).json({
                 success : false,
                 message : "User Does not exist"
             }) 
        }

        // Compare its password 
        const IsMatch = await bcrypt.compare(req.body.password , UserExist.password)

        if (!IsMatch){
             return res.status(402).json({
                   success : false,
                   message : "Wrong Credentails" 
             })
        }
         
        const token = jwt.sign({id : UserExist._id}  , process.env.JWT_SECRET)

        res.cookie("jwtToken" , token).status(200).json({
             success : true,
             message : "Your are logged In successFully",
             UserExist,
             token
        })
         
    }

    catch (error) {
         res.status(500).json({
             success : false,
             message : error.message
         })
    }
     

}


//  Get Authenticated User 
const GetAuthUser = async(req , res ) =>{
      
    try {
          const {id} = req.user
          console.log(id)
          const AuthUser = await UserModel.findById(id)
          
          if (!AuthUser){
               return res.status(401).json({
                    success : false,
                    message : "UnAuthorised Access Denied"
               })
          }
          res.status(200).json({
               success : true,
               AuthUser
          })
    }
    catch (error){
      
        res.status(500).json({
           success : false,
           message : error.message
        })

    }

}


module.exports = {Register , Login , GetAuthUser}