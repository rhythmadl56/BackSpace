const express = require("express");

const {
    createJournal,
    getAllJournals,
} = require("../controllers/journalController");

const router = express.Router();

// Create Journal
router.post("/", createJournal);

// Get All Journals
router.get("/", getAllJournals);

module.exports = router;