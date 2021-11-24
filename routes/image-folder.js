const express = require('express');

// Imports
const controller = require('../controller/image-folder');
const checkUserAuth = require('../middileware/check-user-auth');
// const checkIpWhitelist = require('../middileware/check-ip-whitelist');

// Get Express Router Function..
const router = express.Router();

/**
 * /api/image-folder
 * http://localhost:3000/api/image-folder
 */

router.post('/add-new-image-folder',checkUserAuth, controller.addNewImageFolder);
router.post('/add-new-image-folder-multi',checkUserAuth, controller.addNewImageFolderMulti);
router.get('/get-all-image-folder-list',checkUserAuth, controller.getAllImageFolder);
router.get('/get-image-folder-details-by-id/:id',checkUserAuth, controller.getSingleImageFolderById);
router.delete('/delete-image-folder-by-id/:id',checkUserAuth, controller.deleteImageFolderById);
router.post('/delete-image-folder-images-multi',checkUserAuth, controller.deleteImageFolderMulti);
router.put('/edit-image-folder-by-id',checkUserAuth, controller.editImageFolderData);


// Export router class..
module.exports = router;
