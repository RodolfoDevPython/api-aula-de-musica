const express = require("express");

const AlunoController = require("./app/controllers/AlunoController");
const ExercicioController = require("./app/controllers/ExerciciosController");
const RespostaController = require("./app/controllers/RespostasControllers");
const ModuloController = require("./app/controllers/ModulosController");
const Alternativas = require("./app/controllers/AlternativasController");
const Historico = require("./app/controllers/HistoricoController");
const Ranking = require("./app/controllers/RankingController");

const router = express.Router();

//Pelo app
router.post("/aluno", AlunoController.inserir);
router.get("/alunos", AlunoController.todosAlunos);
router.post("/aluno/modulo/:id", AlunoController.choose_modulo);
router.get("/aluno/:id/modulo/", AlunoController.modulosDoAluno);

router.get("/modulo/:modulo_id/exercicios", ExercicioController.list_all)

router.post("/aluno/login", AlunoController.login);

//O CRUD É FEITO PELO DASHBOARD
router.post("/modulo", ModuloController.inserir);
router.get("/modulos", ModuloController.listagem);
router.delete("/modulo/:id", ModuloController.delete);
router.put("/modulo/:id", ModuloController.update);


//O CRUD É FEITO PELO DASHBOARD
router.post("/modulo/:modulo_id/exercicio" , ExercicioController.inserir);
router.get("/exercicios/:modulo_id" , ExercicioController.listagem);
router.delete("/modulo/:modulo_id/exercicio/:id", ExercicioController.delete);
router.put("/modulo/:modulo_id/exercicio/:id", ExercicioController.update);

//inserir a resposta no pelo dashboard
router.post("/exercicio/:exercicio_id/resposta", RespostaController.inserir);
router.get("/exercicio/:exercicio_id/alternativas", RespostaController.listagem);
router.put("/exercicio/resposta/:id", RespostaController.update);

router.post("/alternativas", Alternativas.inserir);
router.get("/alternativas", Alternativas.listagem);

router.post("/aluno/:aluno_id/exercicios/:exercicio_id/resposta", AlunoController.alternativa_escolhida);

router.get("/historico", Historico.listagem);

router.get("/ranking", Ranking.listagem);
router.delete("/ranking/:id", Ranking.delete);

module.exports = router;