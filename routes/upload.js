const express = require('express');

// Created Require Files..
const controller = require('../controller/upload');

// Get Express Router Function..
const router = express.Router();

/**
 * /api/upload
 * http://localhost:3000/api/upload
 */
router.post('/single-image-original', controller.multerConfigSingleImageOriginal.single(process.env.ORIGINAL_IMAGE_FIELD), controller.uploaderImageOriginal);


// Export All router..
module.exports = router;
