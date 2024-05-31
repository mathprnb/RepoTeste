import User from "../models/User.js"

const saveUser = async (userModel) => {
    const save = await User.create(userModel);
    return save;
}

const getAllUsers = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']
        ]
    });
}

const getUserById = async (id) => {
    return await User.findByPk(id);
}

const deleteUserById = async (id) => {
    return await User.destroy({where: {id: id}});
}

const updateUserById = async (id, userModel) => {
    try {
        const result = await User.update({where: {id: id}});
        if (result[0]===1) {
            return { message: "User update successfully."};
        } else {
            return { message: "User id ${id} not found.", status: 404};
        }
    } catch (error) {
        console.error();
    }
}

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
}

export default factory;