const mongoose = require("mongoose");

const journalSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,  //automatically removes the extra spaces
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