const Exercicio = require("../models/Exercicio");
const Resposta = require("../models/Resposta");

module.exports = {
    async listagem(req, res){

    },
    async inserir(req, res){

        const { descricao } = req.body;

        const exercicio = await Exercicio.create({ descricao });

        if (!exercicio) return res.json("Problema ao inserir um exercicio");

        return res.json(exercicio);
    }
}