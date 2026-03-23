const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const dashboardController = require("../controllers/dashboardControllers");

router.get("/allHoldings", wrapAsync(dashboardController.allHoldings));
router.get("/allPositions", wrapAsync(dashboardController.allPositions));
router.get("/allOrders", wrapAsync(dashboardController.allOrders));
router.post("/newOrder", wrapAsync(dashboardController.newOrder));

module.exports = router;