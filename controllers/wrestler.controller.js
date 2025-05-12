import db from '../models/index.js';
const Wrestler = db.Wrestler;

export const createWrestler = async (req, res) => {
  try {
    const wrestler = await Wrestler.create(req.body);
    res.status(201).json(wrestler);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllWrestlers = async (req, res) => {
  try {
    const wrestlers = await Wrestler.findAll();
    res.status(200).json(wrestlers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWrestlerById = async (req, res) => {
  try {
    const wrestler = await Wrestler.findByPk(req.params.id);
    if (!wrestler) return res.status(404).json({ message: 'Wrestler not found' });
    res.status(200).json(wrestler);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateWrestler = async (req, res) => {
  try {
    const wrestler = await Wrestler.findByPk(req.params.id);
    if (!wrestler) return res.status(404).json({ message: 'Wrestler not found' });
    await wrestler.update(req.body);
    res.status(200).json(wrestler);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteWrestler = async (req, res) => {
  try {
    const wrestler = await Wrestler.findByPk(req.params.id);
    if (!wrestler) return res.status(404).json({ message: 'Wrestler not found' });
    await wrestler.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

