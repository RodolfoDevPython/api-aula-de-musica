const Historico = require("../models/historico_resposta");

module.exports = {

    async listagem(req, res) {

        const { aluno_id = false } = req.params;

        const historico = await Historico.findAll({
            include: [
                { association : "Alunos" },
                { association : "Exercicios" }
            ],
            where: {
                aluno_id
            }
        });

        return res.json({ historico });

    },

}