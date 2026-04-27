const express = require("express");
const router = express.Router();
const kelasSayaController = require("../controllers/kelasSayaController");

router.get("/", kelasSayaController.getAll);
router.get("/:id", kelasSayaController.getById);
router.patch("/:id/progress", kelasSayaController.updateProgress);

module.exports = router;
