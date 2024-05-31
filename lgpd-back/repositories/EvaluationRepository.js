import Evaluation from "../models/Evaluation.js"

const saveEvaluation = async (evaluationModel) => {
    const save = await Evaluation.create(evaluationModel);
    return save;
}

const getAllEvaluations = async () => {
    return await Evaluation.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getEvaluationById = async (id) => {
    return await Evaluation.findByPk(id);
}

const deleteEvaluationById = async (id) => {
    return await Evaluation.destroy({where: {id: id}});
}

const updateEvaluationById = async (id, evaluationModel) => {
    try {
        const result = await Evaluation.update({where: {id: id}});
        if (result[0]===1) {
            return { message: "Evaluation update successfully."};
        } else {
            return { message: "Evaluation id ${id} not found.", status: 404};
        }
    } catch (error) {
        console.error();
    }
}

const factory = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default factory;