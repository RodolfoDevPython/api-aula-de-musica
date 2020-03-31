const Aluno = require("../models/Aluno");
const Modulo = require("../models/Modulos");

module.exports = {
    async inserir(req, res) {

        const { nome, senha_hash, comum } = req.body;

        const findAluno = await Aluno.findOne({ where: { nome, comum } });

        if (findAluno) return res.json({ message: "Esse usuario já existe" });

        const aluno = await Aluno.create({ nome, senha_hash, comum });

        return res.json({ message: "Criado com Sucesso", aluno });

    },
    async listagem(req, res) {

        const aluno = await Aluno.findAll();

        return res.json({ aluno });

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
        
        await aluno.addModulos(modulo);

        return res.json(aluno);

    },
    
}