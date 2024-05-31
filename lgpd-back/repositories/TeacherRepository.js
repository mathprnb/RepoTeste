import Teacher from "../models/Teacher.js"

const saveTeacher = async (teacherModel) => {
    const save = await Teacher.create(teacherModel);
    return save;
}

const getAllTeachers = async () => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getTeacherById = async (id) => {
    return await Teacher.findByPk(id);
}

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({where: {id: id}});
}

const updateTeacherById = async (id, teacherModel) => {
    try {
        const result = await Teacher.update({where: {id: id}});
        if (result[0]===1) {
            return { message: "Teacher update successfully."};
        } else {
            return { message: "Teacher id ${id} not found.", status: 404};
        }
    } catch (error) {
        console.error();
    }
}

const factory = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById
}

export default factory;