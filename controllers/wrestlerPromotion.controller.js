import WrestlerPromotion from '../models/wrestler_promotion.model.js';

export const getAllWrestlerPromotions = async (req, res) => {
  try {
    const data = await WrestlerPromotion.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching wrestler-promotions' });
  }
};

export const getWrestlerPromotionById = async (req, res) => {
  try {
    const data = await WrestlerPromotion.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Record not found' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching record' });
  }
};

export const createWrestlerPromotion = async (req, res) => {
  try {
    const newData = await WrestlerPromotion.create(req.body);
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ error: 'Error creating record' });
  }
};

export const updateWrestlerPromotion = async (req, res) => {
  try {
    const data = await WrestlerPromotion.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Record not found' });

    await data.update(req.body);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: 'Error updating record' });
  }
};

export const deleteWrestlerPromotion = async (req, res) => {
  try {
    const data = await WrestlerPromotion.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Record not found' });

    await data.destroy();
    res.json({ message: 'Record deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting record' });
  }
};


