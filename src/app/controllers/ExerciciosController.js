const Exercicio = require("../models/Exercicio");
const Resposta = require("../models/Resposta");

module.exports = {
    
    async listagem(req, res){

        const exercicios = await Exercicio.findAll({ include: { association: "ExercicioDoModulo" }});

        return res.json(exercicios);

    },
    async inserir(req, res){

        const { modulo_id } = req.params;

        const { descricao } = req.body;
        
        const findExercicio = await Exercicio.findOne({ where: { descricao, modulo_id } });

        if (findExercicio) return res.json({ message: "Esse Exercicio já exite nesse Modulo" });

        const exercicio = await Exercicio.create({ descricao, modulo_id });

        if (!exercicio) return res.json({ message: "Exercicio já existe" });

        return res.json(exercicio);

    },
    async delete(req, res) {

        const { id } = req.params;

        if (!await Exercicio.findByPk(id) ) return res.json({ message: "Esse Exercicio não existe" });

        await Exercicio.destroy({ where: {id} });

        return res.json({ message: "Excluido com Sucesso" });

    },
    async update(req, res) {

        const { id } = req.params;
        const info = req.body;

        await Exercicio.update( info, { where: { id } });

        return res.json({ message: "Atualizado com Sucesso", exercicio });

    }

}