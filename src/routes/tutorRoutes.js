const express = require("express");
const router = express.Router();
const tutorController = require("../controllers/tutorController");

router.get("/", tutorController.getAll);
router.get("/:id", tutorController.getById);
router.post("/", tutorController.create);
router.put("/:id", tutorController.update);
router.delete("/:id", tutorController.destroy);

module.exports = router;
