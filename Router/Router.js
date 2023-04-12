const express = require('express');
const app = express();
const router = new express.Router();
const {signIn,signUp,requestForAdmin,acceptAdmin,rejectAdmin,findStudyMaterial,team,removeAdmin} = require('../Controller/user');
const {uploadStudyMaterial,deleteStudyMaterial} = require('../Controller/admin');
var cookieParser = require('cookie-parser')
app.use(cookieParser())

const auth = require("../Middleware/auth")

router.post("/admin/login",signIn)
router.post("/admin/register",signUp)
router.get("/requestForAdmin",requestForAdmin)
router.put("/acceptAdminRequest",acceptAdmin)
router.put("/rejectAdminRequest",rejectAdmin)
router.put("/removeAdmin",removeAdmin)
router.post("/uploadStudyMaterial",uploadStudyMaterial)
router.put("/deleteMaterial",deleteStudyMaterial)
router.post("/findStudyMaterial",findStudyMaterial)
router.get("/team",team)


module.exports = router