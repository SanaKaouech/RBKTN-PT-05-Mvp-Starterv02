const router = require('express').Router();
const itemController = require("../controllers/item.controller");



router.get("/", itemController.selectAll);
router.get("/:race", itemController.getOneAnimal);
router.post("/", itemController.addAnimal);
router.put("/:id", itemController.updateAnimal);
router.delete("/:id", itemController.removeAnimal);

module.exports = router;


