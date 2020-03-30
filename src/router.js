const express = require("express");
const ExercicioController = require("./app/controllers/ExerciciosController");
const RespostaController = require("./app/controllers/RespostasControllers");

const router = express.Router();

router.post("/exercicio" , ExercicioController.inserir);
router.post("/exercicio/:id/resposta", RespostaController.inserir);

module.exports = router;