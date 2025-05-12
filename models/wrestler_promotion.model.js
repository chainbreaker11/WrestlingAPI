import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
const WrestlerPromotion = sequelize.define("WrestlerPromotion", {
    start_date: {
      type: DataTypes.DATEONLY
    },
    end_date: {
      type: DataTypes.DATEONLY
    },
    alias: {
      type: DataTypes.STRING
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });

export default WrestlerPromotion;