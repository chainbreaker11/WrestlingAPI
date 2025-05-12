import sequelize from '../config/db.js';
import Wrestler from './wrestler.model.js';
import Promotion from './promotion.model.js';
import WrestlerPromotion from './wrestler_promotion.model.js';
import Championship from './championship.model.js';
import WrestlerChampionship from './wrestler_championship.model.js';

import '../models/associations.js'; 

const db = {
  sequelize,
  Wrestler,
  Promotion,
  WrestlerPromotion,
  Championship,
  WrestlerChampionship
};

export default db;
