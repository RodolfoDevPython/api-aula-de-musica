const Exercicio = require("../models/Exercicio");
const Resposta = require("../models/Resposta");

module.exports = {
    async listagem(req, res){

        const exercicios = await Exercicio.findAll({ include: { association: "RespostaCorreta" } });

        return res.json(exercicios);

    },
    async inserir(req, res){

        const { descricao } = req.body;

        const [ exercicio, completed ] = await Exercicio.findOrCreate({ where: { descricao } });

        if (!completed) return res.json({ message: "Exercicio já existe" });

        return res.json(exercicio);

    }
}