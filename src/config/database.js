require("dotenv").config({
    path: ".env"
});

module.exports = {
    host: process.env.DATABASE_URL,
    dialect: "postgres",
    define: {
        timestamps: true,
        underscored: true
    }   
}