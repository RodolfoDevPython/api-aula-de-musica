const { Model, DataTypes } = require("sequelize");
const sequelizePaginate = require("sequelize-paginate");

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
        //this.hasOne(models.Exercicios, { foreignKey: "resposta_id", as : "RespostaCerta" });
        this.belongsTo(models.Exercicios ,  { foreignKey: "exercicio_id" , as: "Exercicio" });
    }    
    
}

sequelizePaginate.paginate(Respostas);

module.exports = Respostas;