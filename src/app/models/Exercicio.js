const { Model, DataTypes } = require("sequelize"); 

class Exercicios extends Model {

    static init(connection) {
        super.init({
            descricao: DataTypes.STRING
        }, {
            sequelize: connection
        });
    }

    static associate(models) {
        this.belongsTo(models.Respostas ,  { foreignKey: "resposta_id" , as: "RespostaCorreta" });
        this.belongsTo(models.Modulos, { foreignKey: "module_id", as: "exercicio_do_modulo" });

        this.belongsToMany( models.Aluno, {
            through: "historico_resposta",
            as: "exercicioSetado",
            foreignKey: "exercicio_id"
        });
    }
}

module.exports = Exercicios;