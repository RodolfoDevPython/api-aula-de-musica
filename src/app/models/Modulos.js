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

        this.belongsToMany( models.Aluno, { 
            through: "alunos_modulos", 
            as: "alunos",
            foreignKey: "modulo_id"
         });

        this.hasMany(models.Exercicios, { as: "exercicio_do_modulo" });

    }
}

module.exports = Modulos;