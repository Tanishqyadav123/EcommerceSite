const express = require ("express")
const router = express.Router()
const {AddProduct , RemoveProduct, GetAllProducts, NewCollection, Popular} = require('../controller/ProductController.js')


router.post("/addproduct" , AddProduct)
router.delete("/removeproduct/:productId" , RemoveProduct)
router.get("/getallproducts" , GetAllProducts)
router.get("/getnewcollection" , NewCollection)
router.get("/getpopularcollection" , Popular)

module.exports = router;