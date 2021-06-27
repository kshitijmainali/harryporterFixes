const express = require('express');

const Route = express.Router();

const listingController = require('./listingController');

Route.route('/listAll').get(listingController.charecterLister);
Route.route('/charecter/:name').get(listingController.singleCharecter);
module.exports = Route;
