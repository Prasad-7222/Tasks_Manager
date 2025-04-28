const express = require("express");
const { adminOnly, protect } = require("../middlewares/authMiddlewares");
const { getUsers, getUserById, deleteUser } = require("../controllers/userControllers");

const router = express.Router();

//User management Routes
router.get("/", protect, adminOnly, getUsers);
router.get("/:id", protect, getUserById);
// router.delete("./:id", protect, adminOnly, deleteUser);

module.exports = router;
