import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

  const Wrestler = sequelize.define("Wrestler", {
    wrestler_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY
    },
    height: {
      type: DataTypes.FLOAT
    },
    weight: {
      type: DataTypes.FLOAT
    },
    nationality: {
      type: DataTypes.STRING
    },
    debut_year: {
      type: DataTypes.INTEGER
    },
    finish_year: {
      type: DataTypes.INTEGER
    },
    image_url: {
      type: DataTypes.STRING
    }
  });
export default Wrestler;