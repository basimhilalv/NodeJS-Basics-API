const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/userControllers');
const validateToken = require('../middleware/validateTokenHandles');

const router = express.Router();

router.post("/register", registerUser)
router.post("/login",loginUser)
router.get("/login", (req,res)=>{
    console.log("Get the login page")
    res.status(200).json({message:"Hiii it is failed again"});
})
router.get("/current", validateToken, currentUser) 

module.exports = router;