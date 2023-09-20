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

/**
 * @swagger
 * components:
 *   schemas:
 *     Aluno:
 *       type: object
 *       required:
 *         - nome
 *         - senha_hash
 *         - comum
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         nome:
 *           type: string
 *           description: Nome do Aluno
 *         senha_hash:
 *           type: string
 *           description: senha hash
 *         comum:
 *           type: string
 *           description: Nome da comum congregação
 *       example:
 *         id: d5fE_asz
 *         nome: rodolfo
 *         senha_hash: 123445dvdsf
 *         comum: Pq.Santana 2
 */

 /**
  * @swagger
  * tags:
  *   name: Alunos
  *   description: rotas de Alunos
  */

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Returna uma lista de alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Rota responsavel por listar os alunos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  $ref: "#/components/schemas/Aluno"
 */
router.get("/alunos", AlunoController.todosAlunos);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Inserir um modulo para o aluno
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Inserção do modulo escolhido pelo aluno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               item:
 *                  $ref: "#/components/schemas/Aluno"
 */
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


/**
 * @swagger
 * /alunos/:aluno_id/exercicios/:exercicio_id/resposta:
 *   post:
 *     summary: Inserir alternativa escolhida pelo aluno
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Inserção do modulo escolhido pelo aluno
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                  $ref: "#/components/schemas/Aluno"
 */
router.post("/aluno/:aluno_id/exercicios/:exercicio_id/resposta", AlunoController.alternativa_escolhida);

router.get("/historico/:aluno_id", Historico.listagem);

router.get("/ranking", Ranking.listagem);
router.delete("/ranking/:id", Ranking.delete);

module.exports = router;