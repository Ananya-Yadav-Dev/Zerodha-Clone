const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
  name: String,
  price: Number,
  percent: String,
  isDown: Boolean,
});

const holdingsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const positionsSchema = new mongoose.Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const WatchlistModel = mongoose.model("Watchlist", watchlistSchema);
const HoldingsModel = mongoose.model("Holdings", holdingsSchema);
const PositionsModel = mongoose.model("Positions", positionsSchema);

module.exports = { WatchlistModel, HoldingsModel, PositionsModel };
