// routes/itemRoutes.js
const express = require('express');
const multer  = require('multer');
const path    = require('path');
const ctrl    = require('../controllers/itemController');
const router  = express.Router();

// configurar storage do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});

const upload = multer({ storage });

// rotas CRUD
router.get('/',          ctrl.getAllItems);
router.post('/',  upload.single('image'), ctrl.createItem);
router.put('/:id', upload.single('image'), ctrl.updateItem);
router.delete('/:id',   ctrl.deleteItem);

module.exports = router;
