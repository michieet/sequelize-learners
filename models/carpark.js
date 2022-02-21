const {DataTypes} = require("sequelize");
const {sequelize} = require("./index"); 


const Carpark = sequelize.define(
    'Carpark', {
        //Columns
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, //Serial number in increasing order
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        noOfSlots: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "no_of_slots"
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
        modelName: "Carpark",
        tableName: "car_park",
    },
);

module.exports = Carpark;