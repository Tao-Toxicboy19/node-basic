const Product = require("../models/product.model");

exports.readController = async (req, res) => {
  try {
    const id = req.params.id;
    const producted = await Product.findOne({ _id: id }).exec();
    return res.json({ message: "Hello list", result: producted });
  } catch (err) {
    console.log(`Error เหี้ย ${err}`);
    return res.status(500).send("Server Error");
  }
};

exports.listController = async (req, res) => {
  try {
    const producted = await Product.find({}).exec();

    return res.json({ message: "Hello list", result: producted });
  } catch (err) {
    console.log(`Error เหี้ย ${err}`);
    return res.status(500).send("Server Error");
  }
};

exports.createController = async (req, res) => {
  try {
    console.log(req.body);
    const producted = await Product(req.body).save();

    return res.json({ message: "Create Successfully", result: producted });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};
``;
exports.updateController = async (req, res) => {
  try {
    const id = req.params.id;
    const update = await Product.FindOneAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();

    return res.json({ message: "Hello update", result: update });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};

exports.deleteController = async (req, res) => {
  try {
    const id = req.params.id;
    const remove = await Product.findOneAndDelete({ _id: id }).exec();

    return res.json({ message: "Hello delete", result: remove });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};
