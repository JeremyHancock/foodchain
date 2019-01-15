module.exports = function(sequelize, DataTypes) {
    var Link = sequelize.define("Link", {
    
      product_id: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
          }
      },
      vendor_id: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
          }
      },
      code_id: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
          }
      },
      location: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
          }
      }

    });
    return Link;
  };
  