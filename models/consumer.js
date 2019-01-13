module.exports = function(sequelize, DataTypes) {
    var Consumer = sequelize.define("Consumer", {
    
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1]
        }
      },
      user_password: {
        type: DataTypes.STRING.BINARY,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      person_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      phone_number: {
        type: DataTypes.STRING,
        validate: {
            len: [1]
          }
      }

    });
    return Consumer;
  };
  