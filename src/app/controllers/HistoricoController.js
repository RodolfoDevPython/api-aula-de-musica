const Historico = require("../models/historico_resposta");

module.exports = {

    async listagem(req, res) {

        const historico = await Historico.findAll({
            include: [
                { association : "Alunos" },
                { association : "Exercicios", }
            ]
        });

        return res.json({ historico });

    },

}