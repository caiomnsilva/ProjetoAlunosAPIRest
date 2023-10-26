const express = require("express");
const alunosController = require("./controllers/alunosControllers");
const alunosMiddlewares = require("./middlewares/alunosMiddlewares");

const router = express.Router();

router.get("/alunos", alunosController.getAll);

router.post(
    "/alunos",
    alunosMiddlewares.validateBody,
    alunosController.createAluno
);

router.delete("/alunos/:id", alunosController.deleteAluno);

router.put(
    "/alunos/:id",
    alunosMiddlewares.validateBody,
    alunosController.updateAluno
);

module.exports = router;
