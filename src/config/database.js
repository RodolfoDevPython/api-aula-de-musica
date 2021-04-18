require("dotenv").config({
    path: ".env"
});

module.exports = {
    host: process.env.DATABASE_URL_TESTE,
    database: "DB_TESTE",
    username: "root",
    password: "41512330",
    dialect: "mysql",
    define: {
        timestamps: true,
        underscored: true
    }   
}