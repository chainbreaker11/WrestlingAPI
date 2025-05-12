import {Router} from 'express';
import {getAllWrestlers, getWrestlerById, createWrestler, updateWrestler, deleteWrestler} from '../controllers/wrestler.controller.js';

const router = Router();

router.get('/', getAllWrestlers);
router.get('/:id', getWrestlerById);
router.post('/', createWrestler);
router.put('/:id', updateWrestler);
router.delete('/:id', deleteWrestler);

export default router;