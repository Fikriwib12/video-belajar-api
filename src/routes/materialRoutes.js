const express = require("express");
const router = express.Router();
const materialController = require("../controllers/materialController");

router.get("/", materialController.getAll);
router.get("/:id", materialController.getById);
router.post("/", materialController.create);
router.put("/:id", materialController.update);
router.delete("/:id", materialController.destroy);

module.exports = router;
