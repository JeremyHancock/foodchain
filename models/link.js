module.exports = function(sequelize, DataTypes) {
    var Link = sequelize.define("Link", {
    
      Products_id: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
          }
      },
      Vendors_id: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
          }
      },
      code: {
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
  