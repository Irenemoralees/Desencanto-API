const express = require (`express`);
const router = express.Router ();
const   {personageSelect, selectOnePersonage, personageAdd, personageUpdate} = require (`../controllers/personages.controller`);
const  {kingdomDelete, kingdomUpdate} = require (`../controllers/kingdoms.controller`);


router.get (`/select`, personageSelect);
router.get (`/selectpersonage/:id`, selectOnePersonage);
router.post (`/add`, personageAdd);
router.put (`/update/:id`, personageUpdate);
router.delete(`/delete/:id`, kingdomDelete);


module.exports = router;