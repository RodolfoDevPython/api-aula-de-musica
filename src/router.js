const express = require("express");

const AlunoController = require("./app/controllers/AlunoController");
const ExercicioController = require("./app/controllers/ExerciciosController");
const RespostaController = require("./app/controllers/RespostasControllers");
const ModuloController = require("./app/controllers/ModulosController");

const router = express.Router();

router.post("/aluno", AlunoController.inserir);
router.put("/aluno", AlunoController.inserir);
router.get("/alunos", AlunoController.listagem);
router.post("/aluno/modulo/:id", AlunoController.choose_modulo);

router.post("/modulo", ModuloController.inserir);
router.get("/modulos", ModuloController.listagem);

router.post("/exercicio" , ExercicioController.inserir);
router.get("/exercicio" , ExercicioController.listagem);
router.post("/exercicio/:id/resposta", RespostaController.inserir);
router.get("/exercicio/resposta", RespostaController.listagem);


module.exports = router;