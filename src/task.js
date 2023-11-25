//task.js

const Task = (description, priority) => {
    return {
      description,
      priority,
      isComplete: false,
    };
  };
  
  export default Task;
  