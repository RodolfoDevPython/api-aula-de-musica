const { Model, DataTypes } = require("sequelize");


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

}

module.exports = Aluno;