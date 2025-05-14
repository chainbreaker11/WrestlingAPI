import Championship from '../models/championship.model.js';

export const getAllChampionships = async (req, res) => {
  try {
    const championships = await Championship.findAll();
    res.json(championships);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching championships' });
  }
};

export const getChampionshipById = async (req, res) => {
  try {
    const championship = await Championship.findByPk(req.params.id);
    if (!championship) return res.status(404).json({ error: 'Championship not found' });
    res.json(championship);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching championship' });
  }
};

export const createChampionship = async (req, res) => {
  try {
    const newChampionship = await Championship.create(req.body);
    res.status(201).json(newChampionship);
  } catch (error) {
    res.status(400).json({ error: 'Error creating championship' });
  }
};

export const updateChampionship = async (req, res) => {
  try {
    const championship = await Championship.findByPk(req.params.id);
    if (!championship) return res.status(404).json({ error: 'Championship not found' });

    await championship.update(req.body);
    res.json(championship);
  } catch (error) {
    res.status(400).json({ error: 'Error updating championship' });
  }
};

export const deleteChampionship = async (req, res) => {
  try {
    const championship = await Championship.findByPk(req.params.id);
    if (!championship) return res.status(404).json({ error: 'Championship not found' });

    await championship.destroy();
    res.json({ message: 'Championship deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting championship' });
  }
};
export const getChampionshipsByPromotion = async (req, res) => {
  try {
    const championships = await Championship.findAll({
      where: { promotion_id: req.params.promotionId }
    });
    res.json(championships);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching championships by promotion' });
  }
};