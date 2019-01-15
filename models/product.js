module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
    
      vendor_id: { // this should probably be vendor_id to keep consistent with the other column names
        type: DataTypes.TINYINT,
        allowNull: true, // change to false
        validate: {
          // len: [1]
        }
      },
      harvest_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      chemicals_used: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      certified_organic: {
        type: DataTypes.TINYINT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      vendor_notes: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
    });
    return Product;
  };
  