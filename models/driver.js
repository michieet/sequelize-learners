const {DataTypes} = require("sequelize");
const {sequelize} = require("./index"); 

const Driver = sequelize.define(
    'Drivers', {
        //Columns
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, //Serial number in increasing order
        },
        carLicenseNo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "car_license_no"
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "full_name"
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
        modelName: "Driver",
        tableName: "drivers",
    },
);

module.exports = Driver;