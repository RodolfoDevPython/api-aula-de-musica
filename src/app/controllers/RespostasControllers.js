const Exercicio = require("../models/Exercicio");
const Resposta = require("../models/Resposta");

module.exports = {

    async inserir(req, res){

        const { descricao, pontuacao  } = req.body;
        const { id = 0 } = req.params;

        const [ resposta, completed ] = await Resposta.findOrCreate({ descricao, pontuacao }, { where: { descricao, pontuacao } });
        
        if (!completed) return res.json({ message: "Problema ao inserir uma resposta" });

        if (id != 0) { 

            const exercicio = await Exercicio.findByPk(id); 

            if(!resposta.setRespostaCerta(exercicio) ) return res.json({ message: "Problema ao Inserir uma resposta no  Exercicio" });

        }

        return res.json(resposta);

    },
    async listagem(req, res) {

        const resp = await Resposta.findAll();

        return res.json(resp);

    }

}