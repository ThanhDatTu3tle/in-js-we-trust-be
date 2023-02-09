import express from 'express';
import { getQuestion, getOneQuestion, createQuestion, updateQuestion, deleteQuestion } from '../controllers/question.controller.js';

const router = express.Router()

router.get('/', getQuestion)
router.get('/:id', getOneQuestion)
router.post('/', createQuestion)
router.get('/:id', updateQuestion)
router.delete('/:id', deleteQuestion)

export default router;
