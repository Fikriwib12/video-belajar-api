const express = require("express");
const router = express.Router();
const kelasTutorController = require("../controllers/kelasTutorController");

router.get("/", kelasTutorController.getAll);
router.get("/kelas/:kelas_id", kelasTutorController.getByKelas);
router.post("/", kelasTutorController.assign);
router.delete("/:id", kelasTutorController.remove);

module.exports = router;
