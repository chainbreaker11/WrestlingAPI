import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const WrestlerChampionship = sequelize.define("WrestlerChampionship", {
    reign_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    start_date: {
      type: DataTypes.DATEONLY
    },
    end_date: {
      type: DataTypes.DATEONLY
    },
    days_held: {
      type: DataTypes.INTEGER
    }
  });

export default WrestlerChampionship;