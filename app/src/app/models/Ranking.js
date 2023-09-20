const { Model, DataTypes } = require("sequelize");

class Ranking extends Model {
    static init(connection) {
        super.init({
            tot_pontuacao: DataTypes.INTEGER
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.belongsTo( models.Aluno, {
            foreignKey: "aluno_id",
            as: "Alunos_Rankings",
        });
    }
}

module.exports = Ranking;