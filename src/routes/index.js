const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get("/", async (req, res) => {
    try {
        res.render("pages/index", { title: "Home" });
    } catch (error) {
        console.error("Error rendering view:", error);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;