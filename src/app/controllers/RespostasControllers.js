const Exercicio = require("../models/Exercicio");
const Resposta = require("../models/Resposta");

module.exports = {

    async inserir(req, res){

        const { descricao, pontuacao  } = req.body;
        const { id } = req.params;

        const resposta = await Resposta.create({ descricao, pontuacao });
        const exercicio = await Exercicio.findByPk(id);

        if (!resposta) return res.json("Problema ao inserir uma resposta");
        
        if(!resposta.setRespostaCerta(exercicio) ) return res.json("Problema ao Inserir uma resposta no  Exercicio");

        return res.json("Inserido uma resposta no  Exercicio");

    },
    async listagem(req, res){

        const resp = Resposta.getRespostaCerta();

        return res.json(resp);

    }
}