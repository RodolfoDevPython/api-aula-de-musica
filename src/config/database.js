require("dotenv").config({
    path: ".env"
});

module.exports = {
    host: process.env.DATABASE_URL_TESTE || process.env.DATABASE_URL,
    database: "DB_TESTE",
    username: "root",
    password: "41512330Louko",
    dialect: "mysql",
    define: {
        timestamps: true,
        underscored: true
    }   
}