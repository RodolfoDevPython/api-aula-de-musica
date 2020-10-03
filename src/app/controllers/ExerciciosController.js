const Exercicio = require("../models/Exercicio");
const Resposta = require("../models/Resposta");

module.exports = {
    async list_all(req, res) {

        const { modulo_id } = req.params;
        const { page = 1 } = req.query;

        const options = {
            page , // Default 1
            paginate: 4,
            attributes: ['id', 'descricao'],
            where: { modulo_id },
            include: [
                { association: "ExercicioDoModulo" },
                { 
                    model : Resposta , 
                    as : 'RespostaCerta' 
                }

            ]
        }
        
        const exercicios = await Exercicio.paginate(options);


        return res.json(exercicios);
    },
    async listagem(req, res){

        const { modulo_id = 0 } = req.query;

        // console.log(id)

        // if (id == 0 ) return res.json(await Exercicio.findAll() );

        const exercicios = await Exercicio.findAll({ 
                                    where: { modulo_id } ,
                                    include: [
                                        { association: "ExercicioDoModulo" },
                                        { 
                                            model : Resposta , 
                                            as : 'RespostaCerta' 
                                        }
                                    ] 
                                });

        return res.json(exercicios);

    },
    async inserir(req, res){

        const { modulo_id } = req.params;

        const { descricao } = req.body;
        
        const findExercicio = await Exercicio.findOne({ where: { descricao, modulo_id } });

        if (findExercicio) return res.status(200).json({ message: "Esse Exercicio já exite nesse Modulo" });

        const exercicio = await Exercicio.create({ descricao, modulo_id });

        if (!exercicio) return res.json({ message: "Exercicio já existe" });

        return res.status(201).json({ message: "Exercicio Criado coom Sucesso", exercicio });

    },
    async delete(req, res) {

        const { id } = req.params;

        if (!await Exercicio.findByPk(id) ) return res.json({ message: "Esse Exercicio não existe" });

        await Exercicio.destroy({ where: {id} });

        return res.json({ message: "Excluido com Sucesso" });

    },
    async update(req, res) {

        const { modulo_id ,id } = req.params;
        const info = req.body;


        console.log(info);
        // await Exercicio.update( info, { where: { id, modulo_id } });

        // return res.json({ message: "Atualizado com Sucesso", exercicio });

    }

}