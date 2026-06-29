const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");



main().then(() => {
    console.log("mongodb connected.");
}).catch((err) => {
    console.log("some error connecting to mongo");
})

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/airbnb');
}

async function initDb() {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({...obj, owner:"6a338f662732a75eca46bafc"}));
    await Listing.insertMany(initData.data);
    console.log("data saved.");
}

initDb();