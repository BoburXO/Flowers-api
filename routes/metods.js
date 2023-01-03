const { Router, json } = require("express");
const router = Router();
const Product = require("../models/product");

//get
router.get("/", async (req, res) => {
  try {
    const products = await Product.find(); //modelkalani hammasini topib qoyib beradi
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const product = await Product.findById(req.params._id); // id ga qarab modelkadan get qladi
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
//get

//post
router.post("/", async (req, res) => {
  const { name } = req.body;

  let product = await Product.findOne({ name });
  if (product) return res.send("Bunaqa product uje bor!");

  product = new Product(req.body);
  await product.save();

  res.send("Product qo'shildi: OK");
});
//post

//patch
router.patch("/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const updProduct = req.body;

    const result = await Product.findByIdAndUpdate(_id, updProduct);
    res.send(result);
  } catch (error) {
    console.log({
      error,
      message: "Patch metod ishlamadi, Nmadur noto'g'ri ketdi!",
    });
  }
});
// patch

//delete
router.delete("/:_id", async (req, res) => {
  try {
    await Product.findByIdAndDelete({ _id: req.params._id });

    res.send(`Quyidagi product: ${req.params._id} delete bo'ldi: OK`);
  } catch (error) {
    console.log({
      err,
      message: "Delete metod ishlamadi, Nmadur noto'g'ri ketgan!",
    });
  }
});
//delete


module.exports = router;