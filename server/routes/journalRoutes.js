const express = require("express");

const {
    createJournal,
    getAllJournals,
    deleteJournal,  
} = require("../controllers/journalController");

const router = express.Router();

// Create Journal
router.post("/", createJournal);

// Get All Journals
router.get("/", getAllJournals);

//Deletes Jounrals
router.delete("/:id", deleteJournal);

module.exports = router;