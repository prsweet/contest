import express, { Router } from 'express'
import { createBatch, deleteBatch, getBatches, updateBatch } from '../controllers/BatchController.js';
export const router: Router = express.Router();


router.get('/', getBatches)
router.post('/', createBatch)
router.delete('/:id', deleteBatch)
router.patch('/:id', updateBatch)