const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const { isLoggedIn, isOwner,validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js")

router.route("/")
    .get( wrapAsync(listingController.index))  //Index Route(home page)
    .post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));

//new route - renders form to create new listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//edit route - renders form to edit
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;