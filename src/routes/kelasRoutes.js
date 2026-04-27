const express = require("express");
const router = express.Router();
const KelasController = require("../controllers/kelasController");

router.get("/", KelasController.getAll);
router.get("/:id", KelasController.getById);
router.post("/", KelasController.create);
router.put("/:id", KelasController.update);
router.delete("/:id", KelasController.destroy);
module.exports = router;
