import {Router} from 'express';
import {getAllChampionships, getChampionshipById, createChampionship, updateChampionship, deleteChampionship} from '../controllers/championship.controller.js';

const router = Router();

router.get('/', getAllChampionships);
router.get('/:id', getChampionshipById);
router.post('/', createChampionship);
router.put('/:id', updateChampionship);
router.delete('/:id', deleteChampionship);

export default router;