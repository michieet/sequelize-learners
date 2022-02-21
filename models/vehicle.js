const {DataTypes, Model} = require('sequelize');
// const Driver = require("./driver");
const {sequelize} = require("./index");


class Vehicle extends Model {}
  
Vehicle.init(
    { //Define columns
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, //Serial number in increasing order
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    carPlateNo: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "car_plate_no", //Field param is what the name is in the database
    },
    driverId:{
        type:DataTypes.INTEGER,
        field:"driver_id",
    },        
    createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
        allowNull: true,
    },
    },
    { //Configuration
    sequelize,
    modelName: "Vehicle",
    tableName: "vehicles",
    }
);

// // Create associations
// Vehicle.belongsTo(Driver, {
//     foreignKey:"driver_id"
// });


module.exports = Vehicle;
  