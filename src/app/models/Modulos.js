const { Model, DataTypes } = require("sequelize");

class Modulos extends Model {

    static init(connection){
        super.init({
            nome: DataTypes.STRING
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
       // this.belongsToMany(models);
    }
}

module.exports = Modulos;