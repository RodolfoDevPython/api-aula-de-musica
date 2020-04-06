const Aluno = require("../models/Aluno");
const Modulo = require("../models/Modulos");
const Alternativas = require("../models/Alternativa");
const Respostas = require("../models/Resposta");
const Ranking = require("../models/Ranking");
const Historico = require("../models/historico_resposta");

module.exports = {
    async inserir(req, res) {

        const { nome, senha_hash, comum } = req.body;

        const findAluno = await Aluno.findOne({ where: { nome, comum } });

        if (findAluno) return res.json({ message: "Esse usuario já existe" });

        const aluno = await Aluno.create({ nome, senha_hash, comum });

        return res.json({ message: "Criado com Sucesso", aluno });

    },
    async todosAlunos(req, res) {

        const aluno = await Aluno.findAll();

        return res.json({ aluno });

    },
    async modulosDoAluno(req, res) {

        const { id } = req.params;

        const aluno = await Aluno.findOne({
            where: { id },
            include: { association: "modulo" }
        });

        return res.json({ message: "Modulos do alunos", aluno });

    },
    async updated(req, res) {

        const { id } = req.params;

        const { nome, comum, senha_hash } = req.body;

        const aluno = await Aluno.update({ nome, comum, senha_hash }, { where: { id } });

        if (!aluno) return res.json({ message: "Problema na alteração do Aluno" });

        return res.json({ message: "Alterado com Sucesso" });
        
    },
    async choose_modulo(req, res) {

        const { id } = req.params;

        const { nome } = req.body;

        const aluno = await Aluno.findOne({ where: { nome } });

        const modulo = await Modulo.findByPk(id);

        if (!modulo) return res.json({ message: "Esse Modulo não existe" });
        
        await aluno.addModulo(modulo);

        return res.json({ aluno, modulo });

    },
    async alternativa_escolhida(req, res) {

        const { aluno_id, exercicio_id, resposta_id } = req.params;
        
        const { descricao } = req.body;

        //verificação se a resposta está certa de acordo com a descrição e exercicio_id
        const resp = await Respostas.findOne({ 
            include: { association: 'RespostaCorreta' },
            where: { descricao, exercicio_id }
        });

        const { pontuacao } = resp;

        if (resp == null) {

            //inserir na tabela de historico_respostas
            const hist = await Historico.create({ aluno_id, exercicio_id, resposta_errada: descricao });

            return res.json({ message: "Resposta errada", hist });

        }

        //inserir na tebla de historico_respostas com flag de resposta_certa
        await Historico.create({ aluno_id, exercicio_id, resposta_certa: descricao });

        const [ ranking, completed ] = await Ranking.findOrCreate({ 
            where: { aluno_id },
            defaults: { aluno_id, tot_pontuacao: pontuacao }
        });

        if (!completed) {

            const rank = await Ranking.findOne({ where: { aluno_id } });

            if (rank) {

                const pt = rank.tot_pontuacao;

                const tot = pt + pontuacao;

                await Ranking.update({ aluno_id, tot_pontuacao: tot },{ where: { aluno_id } });
            }
            
        }

        return res.json({ resp });

    }
    
}