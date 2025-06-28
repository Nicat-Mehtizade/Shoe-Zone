const express = require("express");
const {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
} = require("../controllers/productController");
const upload = require("../middlewares/multerMiddleware");
const router = express.Router();

const multiUpload = upload.fields([
  { name: "bannerImage", maxCount: 1 },
  { name: "images", maxCount: 10 },
]);

router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.delete("/:id", deleteProduct);
router.post("/", multiUpload, addProduct);
router.put("/:id", multiUpload, updateProduct);
router.patch("/:id", multiUpload, updateProduct);

module.exports = router;
