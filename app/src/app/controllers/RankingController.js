const Ranking = require("../models/Ranking");

module.exports = {

    async listagem(req, res) {

        const ranking = await Ranking.findAll({ include: { association: "Alunos_Rankings" } });

        return res.json({ ranking });

    },

    async delete(req, res) {

        const { id } = req.params;

        if ( !await Ranking.destroy({ where: { id } }) ) return res.json({ message: "Problema ao excluir" });

        return res.json({ message: "Excluido com Sucesso" });

    }
}