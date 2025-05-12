import Wrestler from './wrestler.model.js';
import Promotion from './promotion.model.js';
import WrestlerPromotion from './wrestler_promotion.model.js';
import Championship from './championship.model.js';
import WrestlerChampionship from './wrestler_championship.model.js';


// Wrestler <-> Promotions (N:M)
Wrestler.belongsToMany(Promotion, {
  through: WrestlerPromotion,
  foreignKey: 'wrestler_id',
});
Promotion.belongsToMany(Wrestler, {
  through: WrestlerPromotion,
  foreignKey: 'promotion_id',
});

// Promotion -> Championship (1:N)
Promotion.hasMany(Championship, { foreignKey: 'promotion_id' });
Championship.belongsTo(Promotion, { foreignKey: 'promotion_id' });

// Wrestler <-> Championship (N:M)
Wrestler.belongsToMany(Championship, {
  through: WrestlerChampionship,
  foreignKey: 'wrestler_id',
});
Championship.belongsToMany(Wrestler, {
  through: WrestlerChampionship,
  foreignKey: 'championship_id',
});
