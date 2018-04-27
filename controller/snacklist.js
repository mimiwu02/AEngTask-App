const express = require('express');
const router = express.Router();
const snacklist = require('../models/List');


//GET HTTP method to /snacklist
router.get('/',(req,res) => {
	snacklist.getAllLists((err, lists)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
		}
		else {
			res.write(JSON.stringify({success: true, lists:lists},null,2));
			res.end();

	}
	});
});


// //POST HTTP method to /snacklist
router.post('/', (req,res,next) => {
	console.log(req.body);
	let newList = new snacklist({
		snack: req.body.snack,
		vegetable: req.body.vegetable,
		fruit: req.body.fruit,
		snackPortion: req.body.snackPortion,
		snackPrice: req.body.snackPrice,
		snackCalories: req.body.snackCalories,
		vegetablePortion: req.body.vegetablePortion,
		vegetablePrice: req.body.vegetablePrice,
		vegetableCalories: req.body.vegetableCalories,
		fruitPortion: req.body.fruitPortion,
		fruitPrice: req.body.fruitPrice,
		fruitCalories: req.body.fruitCalories
	});
	snacklist.addList(newList,(err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

		}
		else
			res.json({success:true, message: "Added successfully."});

	});
});


module.exports = router;
