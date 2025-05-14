import {Router} from 'express';
import {getAllWrestlers, getWrestlerById, createWrestler, updateWrestler, deleteWrestler} from '../controllers/wrestler.controller.js';
import { validateWrestler } from '../middlewares/wrestlerValidator.js';

const router = Router();

router.get('/', getAllWrestlers);
router.get('/:id', getWrestlerById);
router.post('/', createWrestler, validateWrestler);
router.put('/:id', updateWrestler, validateWrestler);
router.delete('/:id', deleteWrestler);

export default router;