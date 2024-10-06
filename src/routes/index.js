const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get("/", async (req, res) => {
    console.log("Route '/' is being hit");
    try {
        res.render("index", { title: "Home" });
    } catch (error) {
        console.error("Error rendering view:", error);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;