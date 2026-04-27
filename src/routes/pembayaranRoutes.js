const express = require("express");
const router = express.Router();
const pembayaranController = require("../controllers/pembayaranController");

router.get("/", pembayaranController.getAll);
router.get("/:id", pembayaranController.getById);
router.post("/", pembayaranController.create);
router.patch("/:id/konfirmasi", pembayaranController.konfirmasi);

module.exports = router;
