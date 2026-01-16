import express, { Router } from 'express'
import { changeContestStatus, createContest, deleteContest, getAllContest, getContest, getLiveContests, getUpcomingContest, updateContest, getMyContests, joinContest } from '../controllers/ContestController.js'
export const router: Router = express.Router()


router.post('/', createContest)
router.get('/all', getAllContest)
router.get('/live', getLiveContests)
router.get('/upcoming', getUpcomingContest)
router.get('/my-contests', getMyContests)
router.patch('/:id', updateContest)
router.delete('/:id', deleteContest)
router.get('/:id', getContest)
router.post('/:id/status', changeContestStatus)
router.post('/:id/join', joinContest)