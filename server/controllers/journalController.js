const Journal = require("../models/Journal");

// Create Journal
const createJournal = async (req, res) => {
    try {
        const { title, content } = req.body;

        const journal = await Journal.create({
            title,
            content,
        });

        res.status(201).json({
            success: true,
            data: journal,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Journals
const getAllJournals = async (req, res) => {
    try {
        const journals = await Journal.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: journals.length,
            data: journals,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteJournal = async (req, res) => {
  try {
    const journal = await Journal.findByIdAndDelete(req.params.id);

    if (!journal) {
      return res.status(404).json({
        success: false,
        message: "Journal not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Journal deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
    createJournal,
    getAllJournals,
    deleteJournal,
};