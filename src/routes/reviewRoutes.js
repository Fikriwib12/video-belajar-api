const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.get("/", reviewController.getAll);
router.get("/kelas/:kelas_id", reviewController.getByKelas);
router.post("/", reviewController.create);
router.put("/:id", reviewController.update);
router.delete("/:id", reviewController.destroy);

module.exports = router;
