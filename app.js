import express from 'express';
import sequelize from './config/db.js'; 
import './models/associations.js'; 

//importacion de las rutas
import wrestlerRoutes from './routes/wrestler.routes.js';
import promotionRoutes from './routes/promotion.routes.js';
import championshipRoutes from './routes/championship.routes.js';
import wrestlerChampionshipRoutes from './routes/wrestlerChampionship.routes.js';
import wrestlerPromotionRoutes from './routes/wrestlerPromotion.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

// Rutas principales
app.use('/api/wrestlers', wrestlerRoutes);
app.use('/api/promotions', promotionRoutes);
app.use('/api/championships', championshipRoutes);
app.use('/api/wrestler-championships', wrestlerChampionshipRoutes);
app.use('/api/wrestler-promotions', wrestlerPromotionRoutes);

app.use(errorHandler);

// Sincroniza la base de datos
await sequelize.sync({ force: false }); 
console.log(' All models were synchronized successfully.');

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

