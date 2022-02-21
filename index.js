const {sequelize, testConnection} = require("./models"); 
const Vehicle = require('./models/vehicle'); 
const Driver = require('./models/driver');
const Carpark = require('./models/carpark'); 
const ParkingHistories = require('./models/parkinghistories');

// Create associations
Vehicle.belongsTo(Driver, {
    foreignKey:"driverId"
});
// Create associations
ParkingHistories.belongsTo(Vehicle, {
    foreignKey:"vehicleId"
});
// Create associations
ParkingHistories.belongsTo(Carpark, {
    foreignKey:"carparkId"
});


// Addition (IIFE)
(async () => {
    // Sync extra columns
    await Vehicle.sync({alter: true});
    await Driver.sync({alter: true});
    await Carpark.sync({alter: true});
    await ParkingHistories.sync({alter: true});

    //See results
    const result1 = await Vehicle.findAll();
    console.log(JSON.stringify(result1));
    const result2 = await Driver.findAll();
    console.log(JSON.stringify(result2));
    const result3 = await Carpark.findAll();
    console.log(JSON.stringify(result3));
    const result4 = await ParkingHistories.findAll({order:[["id", "DESC"]]});
    console.log(JSON.stringify(result4));

    //Create new data
    // const newCarpark = await Carpark.create({
    //     address: 'Bukit Batok 446',
    //     noOfSlots: 467,
    // });
    // const newParkingHistories = await ParkingHistories.create({
    //     vehicleId: 2,
    //     slotNo: 56,
    //     carparkId: 1
    // });
    // console.log(newCarpark);
    // console.log(newParkingHistories);
})();