import { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} from './config.js';
import { Sequelize } from 'sequelize';


const sequelize = new Sequelize (DB_NAME,DB_USER, DB_PASSWORD,{
    host: DB_HOST,
    dialect: 'mysql'
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;