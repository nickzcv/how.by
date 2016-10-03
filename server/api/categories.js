var express = require('express');
var router = express.Router();              // get an instance of the express Router

//Define mongoose Schema
var Category = require('../models/category');


// ----------------------------------------------------
router.route('/categories')

// create a Category (accessed at POST /api/categories)
	.post(function(req, res) {

		var category = new Category();

		category.title = req.body.title;
		category.slug = req.body.slug;
		category.description = req.body.description;
		category.img= req.body.img;

		// save and check for errors
		category.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Category created!' });
		});

	})

	// get all (accessed at GET /api/categories)
	.get(function(req, res) {

		Category.find(function(err, category) {
			if (err)
				res.send(err);

			res.json(category);

		});
	});


// ----------------------------------------------------
router.route('/categories/:category_id')

// get by :category_id
	.get(function(req, res) {
		Category.findById(req.params.category_id, function(err, category) {
			if (err)
				res.send(err);

			res.json(category);
		});
	})
	// update
	.put(function(req, res) {
		Category.findById(req.params.category_id, function(err, category) {

			if (err)
				res.send(err);

			category.title = req.body.title;
			category.slug = req.body.slug;
			category.description = req.body.description;
			category.img= req.body.img;

			category.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Category updated!' });
			});

		});
	})

	// delete
	.delete(function(req, res) {
		Category.remove({
			_id: req.params.category_id
		}, function(err, category) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});



module.exports = router;