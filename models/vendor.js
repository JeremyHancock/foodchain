module.exports = function (sequelize, DataTypes) {
  var Vendor = sequelize.define("Vendor", {

    user_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
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
    company_name: {
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
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    }

  });
  return Vendor;
};
