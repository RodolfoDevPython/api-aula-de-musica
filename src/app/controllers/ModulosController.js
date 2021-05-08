const Modulos = require("../models/Modulos");
const Alunos = require("../models/Aluno");

module.exports = {

    async listagem(req, res) {

        const modulos = await Modulos.findAll();

        return res.json({ modulos });

    },
    async inserir(req, res) {

        const { title, describe } = req.body;

        const [ modulos, completed ] = await Modulos.findOrCreate({ where: { title, describe } });

        if (!completed) return res.json({ message: "já existe esse modulo" });

        const modulo = await Modulos.findOne({ where: { title } });

        return res.status(201).json({ message: "Modulo criado com sucesso!" , modulo });

    },
    async update(req, res) {
       
        const { title, describe } = req.body;

        const { id } = req.params;

        const [ number, modulos ] = await Modulos.update({ title, describe }, { where: { id } });

        if (number == 0) return res.status(200).json({ message: "Can't uptade this module " });

        return res.status(200).json({ message: `Module ${title} updated sucess` });

    },
    async delete(req, res) {
        const { id } = req.params;

        try {

            await Modulos.destroy({ where: { id } });    

            return res.status(200).json({ message: "Module successfully deleted" })

        } catch (error) {
            return res.status(500).json({ message: "We were unable to delete the module", error })   
        }

        

    }
}