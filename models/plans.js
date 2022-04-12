'use strict';

const Plan = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
  });
  return Plan;
};

module.exports = Plan;
