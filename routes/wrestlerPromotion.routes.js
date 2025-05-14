import  {Router} from 'express';
import {getAllWrestlerPromotions, getWrestlerPromotionById, createWrestlerPromotion, updateWrestlerPromotion, deleteWrestlerPromotion} from '../controllers/wrestlerPromotion.controller.js';

const router = Router();

router.get('/', getAllWrestlerPromotions);
router.get('/:id', getWrestlerPromotionById);
router.post('/', createWrestlerPromotion);
router.put('/:id', updateWrestlerPromotion);
router.delete('/:id', deleteWrestlerPromotion);

export default router;