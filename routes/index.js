const {Router} = require('express');
const { FetchData } = require("../lib/data");
const router = Router()


router
.get("/params/:id", (req, res)=>{
    const {params:{id}} = req;
    
(async () => {
    console.log(await FetchData.getCharacter(id))
})();


    })



module.exports.RouterIndex = router