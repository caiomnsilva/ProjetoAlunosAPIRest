const connection = require("./connection");

const getAll = async () => {
    const alunos = await connection.execute("SELECT * FROM alunos");
    return alunos[0];
};

const createAluno = async (aluno) => {
    const { nome } = aluno;

    const query =
        "INSERT INTO alunos(nome, idade, nota1, nota2, professor, sala) VALUES (?, ?, ?, ?, ?, ?)";

    const [createdAluno] = await connection.execute(query, [
        nome,
        0,
        0,
        0,
        "Pendente",
        0,
    ]);

    return { insertId: createdAluno.insertId };
};

const deleteAluno = async (id) => {
    const removedAluno = await connection.execute(
        "DELETE FROM alunos WHERE id = ?",
        [id]
    );
    return removedAluno;
};

const updateAluno = async (id, aluno) => {
    const { nome, idade, nota1, nota2, professor, sala } = aluno;

    const query =
        "UPDATE alunos SET nome = ?, idade = ?, nota1 = ?, nota2 = ?, professor = ?, sala = ? WHERE id = ?";

    const [updatedAluno] = await connection.execute(query, [
        nome,
        idade,
        nota1,
        nota2,
        professor,
        sala,
        id,
    ]);

    return updatedAluno;
};

module.exports = {
    getAll,
    createAluno,
    deleteAluno,
    updateAluno,
};
