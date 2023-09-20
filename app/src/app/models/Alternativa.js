const { Model, DataTypes } = require("sequelize");

class Alternativas extends Model {
    static init(connection) {
        super.init({
            respostas_erradas: DataTypes.STRING
        }, {
            sequelize: connection
        });
    }
}

module.exports = Alternativas;