const express = require("express");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const productsRouter = require("./routes/metods");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/products", productsRouter);

const PORT = process.env.PORT || 8000;

mongoose.set('strictQuery', true);

app.listen(PORT, () => console.log("SERVER:", `http://localhost:${PORT}/products`));

const startServer = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Backend ishladi, OK!"))
      .catch(() => console.log("Backend ishlamadi, XATO!"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
