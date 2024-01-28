const express = require("express")
const { AddToCart, RemoveFromCart, getCart } = require("../controller/CartController.js")
const { Authentication } = require("../controller/AuthController.js")
const router = express.Router()

router.post("/addToCart" , Authentication ,AddToCart)
router.post("/removeFromCart" , Authentication ,RemoveFromCart)
router.post("/getcart" , Authentication ,getCart)

module.exports = router

