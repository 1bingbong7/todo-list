const { paginate } = require('../helpers/paginate');
const { TodoSchema } = require('../schema/todo');


const addTodo = async (data) => {
    return await TodoSchema.create({
        ...data
    });
}

const getTodoList = async (options, query)=> {
    const aggregate = [
        {
            $project: {
                title: "$title",
                description: "$description",
                isCompleted: "$isCompleted",
                dueDate: "$dueDate",
                createdAt: "$createdAt",
                updatedAt: "$updatedAt",
            }
        },
        {
            $match: query
        }
    ];
    return await paginate(options, aggregate, TodoSchema);
}

const getTodo = async (id) => {
    return await TodoSchema.findById(id);
}

const updateTodo = async (id, data) => {
    return await TodoSchema.findByIdAndUpdate(id, data, { new: true });
}

const deleteTodo = async (id) => {
    return await TodoSchema.findByIdAndDelete(id);
}

module.exports = {
    addTodo,
    getTodoList,
    getTodo,
    updateTodo,
    deleteTodo,
}