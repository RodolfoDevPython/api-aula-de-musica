const { Model, DataTypes } = require("sequelize");

class Historico extends Model {

    static init(connection) {
        super.init({
            resposta_errada: DataTypes.STRING,
            resposta_certa: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: "aluno_id", as: "Alunos" });
        this.belongsTo(models.Exercicios, { foreignKey: "exercicio_id", as: "Exercicios" });
    }

}

module.exports = Historico;