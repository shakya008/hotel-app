var express = require('express');
var router = express.Router();
var registration = require('../controllers/registration');
var admin = require('../controllers/adminCtrl');

/* GET home page. */
router.post('/register', registration.registerOwner);

router.get('/registered', registration.getRegisteredOwner);


/*
*/
router.get('/amanities', admin.getAmenities);
router.post('/amanities', admin.saveAmenities);
router.put('/amanities', admin.updateAmenities);
router.delete('/amanities', admin.removeAmenity);

module.exports = router;
