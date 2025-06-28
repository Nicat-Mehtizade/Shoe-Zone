const express = require("express");
const router = express.Router();
const {
  getUserById,
  getAllUsers,
  deleteUserById,
} = require("../controllers/userController");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUserById);
