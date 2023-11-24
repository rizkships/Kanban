const Card = (name) => {
    let tasks = [];

    const addTask = (task) => {
        tasks.push(task);
    }

    const getTasks = () => {
        return tasks;
    }

    return {
        name,
        addTask,
        getTasks,
    }
}

export default Card;