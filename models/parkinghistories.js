const {DataTypes} = require("sequelize");
const {sequelize} = require("./index"); 


const ParkingHistories = sequelize.define(
    'ParkingHistories', {
        //Columns
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, //Serial number in increasing order
        },
        vehicleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "vehicle_id"
        },
        slotNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "slot_no"
        },
        carparkId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "car_park_id"
        },
        createdAt: {
            type: DataTypes.DATE,
            field: "created_at",
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: "updated_at",
            allowNull: true
        },  
    },
    { //Model Config
        sequelize,
        modelName: "ParkingHistories",
        tableName: "parking_histories",
    },
);

module.exports = ParkingHistories;