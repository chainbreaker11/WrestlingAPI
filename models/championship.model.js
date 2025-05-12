import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
  const Championship = sequelize.define("Championship", {
    championship_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_year: {
      type: DataTypes.INTEGER
    }
  });
 export default Championship;