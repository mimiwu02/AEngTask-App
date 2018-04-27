const mongoose = require('mongoose');

//Define BucketlistSchema with title, description and category
const FoodSchema = mongoose.Schema({
  snack: String,
  vegetable: String,
  fruit: String,
  snackPortion: Number,
  snackPrice: Number,
  snackCalories: Number,
  vegetablePortion: Number,
  vegetablePrice: Number,
  vegetableCalories: Number,
  fruitPortion: Number,
  fruitPrice: Number,
  fruitCalories: Number
});

const FoodList = module.exports = mongoose.model('FoodList', FoodSchema)

module.exports.getAllLists = (callback) => {
  FoodList.find(callback);
}

module.exports.addList = (newList, callback) => {
	newList.save(callback);
}
