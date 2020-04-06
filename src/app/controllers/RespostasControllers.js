const Exercicio = require("../models/Exercicio");
const Resposta = require("../models/Resposta");

module.exports = {

    async inserirAlternativas(req, res) {
        const info = req.body;
        console.log(info);

        const [ resposta, completed ] = await Resposta.findOrCreate({ descricao, pontuacao }, { where: info });

        if (!completed) return res.json({ message: "Problema ao inserir uma alternativa" });

        return res.json(resposta);

    },
    async inserir(req, res){

        const { exercicio_id } = req.params;
        
        const { descricao, pontuacao } = req.body;

        const [ resposta, completed ] = await Resposta.findOrCreate({ where: { descricao, pontuacao, exercicio_id } });
        
        if (!completed) return res.json({ message: "Problema ao inserir uma resposta" });

        /*if (id != 0) { 

            const exercicio = await Exercicio.findByPk(id); 

            if(!resposta.setRespostaCerta(exercicio) ) return res.json({ message: "Problema ao Inserir uma resposta no  Exercicio" });

        }*/

        return res.json(resposta);

    },
    async listagem(req, res) {

        const resp = await Resposta.findAll({ include: { association: 'RespostaCorreta' } });

        return res.json(resp);

    },
    async update(req, res){

        const { id } = req.params;

        const info = req.body;

        const resp = await Resposta.update(info, { where: {id} });

        if (!resp) return res.json({ message: "Problema ao atualizar a Resposta" });

        return res.json({ message: "Resposta Atualizada com Sucesso" });
    }

}