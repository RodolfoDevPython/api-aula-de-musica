const { Model, DataTypes } = require("sequelize"); 

class Exercicios extends Model {

    static init(connection) {
        super.init({
            descricao: DataTypes.STRING
        }, {
            sequelize: connection
        });
    }

    /*static associations(models) {
        this.belongsTo( models.Responsta );
    }*/
}

module.exports = Exercicios;