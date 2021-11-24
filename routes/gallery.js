const express = require('express');

// Imports
const controller = require('../controller/gallery');
const checkUserAuth = require('../middileware/check-user-auth');
// const chrequire('../middileware/check-ip-whitelist');


// Get Express Router Function..
const router = express.Router();

/**
 * /api/gallery
 * http://localhost:3000/api/gallery
 */

router.post('/add-new-gallery',checkUserAuth, controller.addNewGalleryImage);
router.post('/add-new-gallery-multi', checkUserAuth, controller.addNewGalleryMultiImage);
router.get('/get-all-gallery-list',checkUserAuth, controller.getAllGalleryImage);
router.get('/get-gallery-details-by-id/:id',checkUserAuth, controller.getSingleGalleryImageById);
router.delete('/delete-gallery-by-id/:id',checkUserAuth, controller.deleteGalleryImageById);
router.post('/delete-gallery-images-multi',checkUserAuth, controller.deleteGalleryImageMulti);
router.put('/edit-gallery-by-id',checkUserAuth, controller.editGalleryImageData);
router.get('/search-image-by-regex', controller.getSearchImageByRegex);


// Export router class..
module.exports = router;
