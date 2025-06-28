const Product = require("../models/productModel");

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      return res.status(404).json({
        message: "Products not found",
      });
    }

    res.status(200).json({
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.find(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const addProduct = async (req, res) => {
  const bannerImageUrl = req.files?.bannerImage?.[0]
    ? `http://localhost:8000/${req.files.bannerImage[0].path}`
    : "";
  const imageUrls = req.files?.images
    ? req.files.images.map((file) => `http://localhost:8000/${file.path}`)
    : [];
  try {
    const addedProduct = await Product.create({
      ...req.body,
      bannerImage: bannerImageUrl,
      images: imageUrls,
    });

    res.status(201).json({
      data: addedProduct,
      message: "Successfully Added",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.file) {
      req.body.image = `http://localhost:8000/${req.file.path}`;
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedProduct) {
      res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: " Product Updated",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductById,
  updateProduct,
};
