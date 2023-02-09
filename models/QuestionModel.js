import mongoose, { Schema } from "mongoose";

const schema = new mongoose.Schema({
    number: {
        type: Number,
        require: true,
    },
    question: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    choiceA: {
        type: String,
        require: true,
    },
    choiceB: {
        type: String,
        require: true,
    },
    choiceC: {
        type: String,
        require: true,
    },
    choiceD: {
        type: String,
        require: true,
    },
    answer: {
        type: String,
        require: true,
    },
    explain: {
        type: String,
        require: true,
    },
}, { timestamps: true })

export const QuestionModel = mongoose.model('Question', schema);
