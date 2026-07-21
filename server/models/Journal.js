const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
    {
        music: {
            type: String,
            default: "",
        },

        visibility: {
            type: String,
            default: "Public",
        },

        mood: {
            type: String,
            default: "😊 Happy",
        },
        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Journal", journalSchema);