module.exports = function(sequelize, DataTypes) {
    var Code = sequelize.define("Code", {
      code_value: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   len: [1]
        // }
      }
    });
    return Code;
  };
  