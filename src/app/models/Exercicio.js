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

        this.belongsTo( models.Modulos, { 
            foreignKey: "modulo_id", 
            as: "ExercicioDoModulo" 
        });

        this.hasOne( models.Respostas, { 
                foreignKey: "exercicio_id", 
                as : "RespostaCerta" 
        });

        this.belongsToMany( models.Aluno, {
            through: "respostas_erradas",
            as: "exercicioSetado",
            foreignKey: "exercicio_id"
        });
    }
}

module.exports = Exercicios;