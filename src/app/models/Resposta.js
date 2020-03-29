const { Model, DataTypes } = require("sequelize");

class Resposta extends Model {

    static init(connection) {
        super.init({
            descricao: DataTypes.STRING,
            pontuacao: DataTypes.INTEGER,
        }, {
            sequelize: connection
        });
    }

    static associations(models) {
        this.hasOne(models.Exercicios, { foreignKey: "resposta_id", as :"RespostaCerta" });
    }
    
}

module.exports = Resposta;