const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt"); 

class Aluno extends Model {

    static init(connection) {
        super.init({
            nome: DataTypes.STRING ,
            comum: DataTypes.STRING,
            senha: DataTypes.STRING,
            senha_hash: DataTypes.VIRTUAL,
        }, {
            sequelize: connection,
            hooks: {
                beforeSave: async aluno => {
                    console.log(aluno.senha_hash)
                    if (aluno.senha_hash) {
                        aluno.senha = await bcrypt.hash(aluno.senha_hash, 8);
                    }
                }
            }

        });

       Aluno.prototype.checkPassword = function(password) {
           return bcrypt.compare(password, this.senha);
       }

    }

    static associate(models) {

        this.belongsToMany( models.Modulos, { 
            foreignKey: "aluno_id",
            through: "alunos_modulos", 
            as: "modulo",
            
        });

        this.belongsToMany( models.Exercicios, {
            through: "respostas_erradas",
            as: "alunoExercicio",
            foreignKey: "aluno_id"
        });
        
        this.hasOne( models.Ranking, {
            foreignKey: "aluno_id",
            as: "AlunoRanking"
        })
    }

}

module.exports = Aluno;