const express = require("express");
const router = express.Router();
const kategoriKelasController = require("../controllers/kategoriKelasController");

router.get("/", kategoriKelasController.getAll);
router.post("/", kategoriKelasController.create);
router.put("/:id", kategoriKelasController.update);
router.delete("/:id", kategoriKelasController.destroy);
module.exports = router;
