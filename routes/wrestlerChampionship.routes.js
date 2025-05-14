import { Router } from 'express';
import {
  getAllWrestlerChampionships,
  getWrestlerChampionshipById,
  createWrestlerChampionship,
  updateWrestlerChampionship,
  deleteWrestlerChampionship,
} from '../controllers/wrestlerChampionship.controller.js';

const router = Router();

router.get('/', getAllWrestlerChampionships);
router.get('/:id', getWrestlerChampionshipById);
router.post('/', createWrestlerChampionship);
router.put('/:id', updateWrestlerChampionship);
router.delete('/:id', deleteWrestlerChampionship);

export default router;
