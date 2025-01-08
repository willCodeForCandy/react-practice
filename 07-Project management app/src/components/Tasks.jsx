import React, { useState } from 'react';

const Tasks = ({ taskList, projectId, setProjects }) => {
  const [taskInput, setTaskInput] = useState('');
  function handleChange(e) {
    setTaskInput(e.target.value);
  }
  function addTask() {
    setProjects(oldProjects =>
      oldProjects.map(project =>
        project.id === projectId
          ? {
              ...project,
              tasks: [...project.tasks, { id: Date.now(), task: taskInput }],
            }
          : project
      )
    );

    setTaskInput('');
  }
  function removeTask(taskId) {
    setProjects(oldProjects =>
      oldProjects.map(project =>
        project.id !== projectId
          ? project
          : {
              ...project,
              tasks: [...project.tasks.filter(task => task.id !== taskId)],
            }
      )
    );
  }
  return (
    <section id="tasks" className="max-w-96">
      <h3 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Tasks
      </h3>
      <div className="flex gap-2 my-4">
        <input
          type="text"
          className="py-1 px-3 bg-gray-200"
          value={taskInput}
          onChange={handleChange}
        />
        <button
          onClick={addTask}
          className="py-2 px-4 font-semibold disabled:text-gray-600 disabled:font-normal disabled:cursor-not-allowed"
          disabled={!taskInput}
        >
          Add Task
        </button>
      </div>
      <ul>
        {taskList?.length > 0 &&
          taskList.map(task => (
            <li key={task.id} className="flex justify-between bg-gray-100 p-4">
              <span>{task.task}</span>
              <button
                onClick={() => removeTask(task.id)}
                aria-label={`Clear task: ${task.task}`}
                className="hover:text-red-600 font-semibold px-4"
              >
                Clear
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Tasks;
