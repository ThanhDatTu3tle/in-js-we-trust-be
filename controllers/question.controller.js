import { QuestionModel } from "../models/QuestionModel.js";

export const getQuestion = async (req, res) => {
    try {
        const question = await QuestionModel.find()
        res.status(200).json(question)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const getOneQuestion = async (req, res) => {
    try {
        const question = await QuestionModel.findById(req.params.id)
        res.status(200).json(question)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const createQuestion = async (req, res) => {
    try {
        const newQuestion = new QuestionModel(req.body)
        const savedQuestion = await newQuestion.save()
        res.status(200).json(savedQuestion)
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const updateQuestion = async (req, res) => {
    try {
        const question = await QuestionModel.findById(req.params.id)
        await question.updateOne({ $set: req.body })
        res.status(200).json("Updated successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};

export const deleteQuestion = async (req, res) => {
    try {
        await QuestionModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully!!!")
    } catch (error) {
        res.status(500).json({ error: error })
    } 
};
