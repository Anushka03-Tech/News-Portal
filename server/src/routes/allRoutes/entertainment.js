const express = require("express");
const Entertainment = require("../../models/entertainment");
const config = require("../../config/config");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pageSize = config.pageSize;
    const articles = await Entertainment.find({ source: { $ne: null } })
      .sort({ publishedAt: "desc" })
      .limit(pageSize)
      .lean();
    res.status(200).json(articles || []);
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
