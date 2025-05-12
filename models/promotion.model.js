import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
  
  const Promotion = sequelize.define("Promotion", {
    promotion_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING
    },
    foundation_year: {
      type: DataTypes.INTEGER
    },
    current_owner: {
      type: DataTypes.STRING
    }
  });

export default Promotion;
