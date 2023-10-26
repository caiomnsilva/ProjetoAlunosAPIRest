const validateField = (fieldName, value, fieldType) => {
    if (value === undefined) {
        return { valid: false, message: `O campo ${fieldName} é obrigatório!` };
    }

    if (fieldType === "int" && !Number.isInteger(value)) {
        return {
            valid: false,
            message: `O campo ${fieldName} deve ser um número inteiro!`,
        };
    }

    if (fieldType === "float" && isNaN(value)) {
        return {
            valid: false,
            message: `O campo ${fieldName} deve ser um número de ponto flutuante válido!`,
        };
    }

    return { valid: true };
};

const validateBody = (req, res, next) => {
    const { body } = req;

    const validations = [];

    validations.push(validateField("nome", body.nome, "string"));
    validations.push(validateField("idade", body.idade, "int"));
    validations.push(validateField("nota1", body.nota1, "float"));
    validations.push(validateField("nota2", body.nota2, "float"));
    validations.push(validateField("professor", body.professor, "string"));
    validations.push(validateField("sala", body.sala, "int"));

    const invalidValidations = validations.filter(
        (validation) => !validation.valid
    );

    if (invalidValidations.length > 0) {
        return res.status(400).json({
            messages: invalidValidations.map(
                (validation) => validation.message
            ),
        });
    }

    next();
};

module.exports = {
    validateBody,
};
