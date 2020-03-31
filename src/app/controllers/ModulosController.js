const Modulos = require("../models/Modulos");

module.exports = {

    async listagem(req, res) {

        const modulos = await Modulos.findAll();

        return res.json({ modulos });

    },
    async inserir(req, res) {

        const { nome } = req.body;

        const [ modulos, completed ] = await Modulos.findOrCreate({ where: { nome } });

        if (!completed) return res.json({ message: "já existe esse modulo" });

        return res.json({ message: "Modulo criado com sucesso!" , modulos });

    }

}