// Import sequelize
const { Sequelize } = require("sequelize");

// DB Connection Configuration
const sequelize = new Sequelize("assignment_db", "postgres", "27892792", {
    host: "localhost",
    dialect: "postgres",
});

// Test connection function
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection to Database successful.");
        return true;
    } catch (error) {
        console.error("Unable to connect to the database:", error);
        return false;
    }
};

// Exports (remember enhanced object literal)
module.exports = {
    sequelize,
    testConnection,
};