const { Model, DataTypes } = require("sequelize");

class Respostas extends Model {

    static init(connection) {
        super.init({
            descricao: DataTypes.STRING,
            pontuacao: DataTypes.INTEGER,
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.hasOne(models.Exercicios, { foreignKey: "resposta_id", as : "RespostaCerta" });
    }    
    
}

module.exports = Respostas;