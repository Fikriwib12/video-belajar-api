const express = require("express");
const router = express.Router();
const modulKelasController = require("../controllers/modulKelasController");

router.get("/", modulKelasController.getAll);
router.get("/:id", modulKelasController.getById);
router.post("/", modulKelasController.create);
router.put("/:id", modulKelasController.update);
router.delete("/:id", modulKelasController.destroy);

module.exports = router;
