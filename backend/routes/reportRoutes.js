const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddlewares");
const { exportsTasksReport, exportsUserReport } = require("../controllers/reportControllers");
const router = express.Router();
router.get("/export/tasks", protect, adminOnly, exportsTasksReport);
router.get("/export/users", protect, adminOnly, exportsUserReport);
module.exports = router;
