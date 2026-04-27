const express = require("express");
const router = express.Router();
const pretestController = require("../controllers/pretestController");

router.get("/", pretestController.getAll);
router.get("/kelas/:kelas_id", pretestController.getByKelas);
router.get("/:id", pretestController.getById);
router.post("/", pretestController.create);
router.put("/:id", pretestController.update);
router.delete("/:id", pretestController.destroy);

module.exports = router;
