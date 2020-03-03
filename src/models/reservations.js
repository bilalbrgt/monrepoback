module.exports = (sequelize, DataTypes) => {
  const reservations = sequelize.define("reservations", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: 4,
        notNull: true
      }
    },
    name: {
      allowNull: false,
      type: DataTypes.CHAR,
      validate: {
        notNull: true
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.CHAR,
      validate: {
        notNull: true
      }
    },
    Numero: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notNull: true
      }
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true
      }
    },
    createdAt: {
      field: "created_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true,
        notNull: true
      }
    },
    updatedAt: {
      field: "updated_at",
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true,
        notNull: true
      }
    }
  });

  Formation.associate = () => {};

  return Formation;
};
