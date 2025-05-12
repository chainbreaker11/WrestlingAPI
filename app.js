import express from 'express';
import sequelize from './config/db.js'; 
import './models/associations.js'; 

//importacion de las rutas
import wrestlerRoutes from './routes/wrestler.routes.js';
import promotionRoutes from './routes/promotion.routes.js';

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

// Rutas principales
app.use('/api/wrestlers', wrestlerRoutes);
app.use('/api/promotions', promotionRoutes);


// Sincroniza la base de datos
await sequelize.sync({ force: false }); // usa true si deseas resetear la base de datos
console.log(' All models were synchronized successfully.');

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

