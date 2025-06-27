// controllers/itemController.js
const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
};

exports.createItem = async (req, res) => {
  const { name, description, category } = req.body;
  let imageUrl = '';
  if (req.file) {
    imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }
  const newItem = await Item.create({ name, description, category, imageUrl });
  res.status(201).json(newItem);
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const data = { name: req.body.name, description: req.body.description, category: req.body.category };
  if (req.file) {
    data.imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }
  const updated = await Item.findByIdAndUpdate(id, data, { new: true });
  res.json(updated);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
