const Alternativas = require("../models/Alternativa");

module.exports = {

    async inserir(req, res) {

        const { respostas_erradas } = req.body;

        const [ alternativas , created ] = await Alternativas.findOrCreate({ where: { respostas_erradas } }); 

        if (!created) return res.json({ message: "Alternativa já existe" });

        return res.json({ message: "Alternativa inserida co0m sucesso", alternativas })
    },

    async listagem(req, res) {

        const alternativas = await Alternativas.findAll();

        return res.json(alternativas);
        
    }
}