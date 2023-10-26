const { response } = require("express");
const alunosModel = require("../models/alunosModel");

const getAll = async (_req, res) => {
    const alunos = await alunosModel.getAll();
    return res.status(200).json(alunos);
};

const createAluno = async (req, res) => {
    const createdAluno = await alunosModel.createAluno(req.body);
    return res.status(201).json(createdAluno);
};

const deleteAluno = async (req, res) => {
    const { id } = req.params;

    await alunosModel.deleteAluno(id);
    return res.status(204).json();
};

const updateAluno = async (req, res) => {
    const { id } = req.params;

    await alunosModel.updateAluno(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createAluno,
    deleteAluno,
    updateAluno,
};
