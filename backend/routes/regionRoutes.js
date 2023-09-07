const express = require("express");
const createRegion  = require("../controllers/regions/regionController");
const getAllRegions = require("../controllers/regions/getRegions");
const router = express.Router();


router.post("/register" , createRegion)
router.get("/get" , getAllRegions)





module.exports = router;