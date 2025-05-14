import WrestlerChampionship from '../models/wrestler_championship.model.js';

export const getAllWrestlerChampionships = async (req, res) => {
  try {
    const data = await WrestlerChampionship.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching wrestler-championships' });
  }
};

export const getWrestlerChampionshipById = async (req, res) => {
  try {
    const data = await WrestlerChampionship.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Record not found' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching record' });
  }
};

export const createWrestlerChampionship = async (req, res) => {
  try {
    const newData = await WrestlerChampionship.create(req.body);
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ error: 'Error creating record' });
  }
};

export const updateWrestlerChampionship = async (req, res) => {
  try {
    const data = await WrestlerChampionship.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Record not found' });

    await data.update(req.body);
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: 'Error updating record' });
  }
};

export const deleteWrestlerChampionship = async (req, res) => {
  try {
    const data = await WrestlerChampionship.findByPk(req.params.id);
    if (!data) return res.status(404).json({ error: 'Record not found' });

    await data.destroy();
    res.json({ message: 'Record deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting record' });
  }
};
