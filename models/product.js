module.exports = function(sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
    
      Vendors_id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
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
      vendors_notes: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    });
    return Product;
  };
  