const express = require("express");
const automobileController = require("../controller/automobileController.js");
const autoDetailsController = require("../controller/autoDetailsController.js");
const router = express.Router();


//ROTAS AUTOMOBILE
router.get("/automobile", automobileController.getAll);
router.get("/automobile/:id", automobileController.getById);
router.get("/automobile/details/:id", automobileController.getByIdDetails);
router.post("/automobile", automobileController.createAutomobile);
router.put("/automobile/:id", automobileController.update);
router.delete("/automobile/:id", automobileController.deleteAutomobile);


//ROTAS DETAILS
router.get("/autoDetails", autoDetailsController.getAll);
router.get("/autoDetails/:id", autoDetailsController.getById);
router.post("/autoDetails", autoDetailsController.createAutomobile);
router.put("/autoDetails/:id", autoDetailsController.update);
router.delete("/autoDetails/:id", autoDetailsController.deleteAutomobile);

module.exports = router;
