require("dotenv").config({
    path: ".env"
});

module.exports = {
    host: process.env.DB_URL || 'localhost',
    database: process.env.DB_NAME || "DB_TESTE",
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD ||  "41512330Louko",
    dialect: process.env.DB_DRIVE || "mysql",
    define: {
        timestamps: true,
        underscored: true
    }   
}