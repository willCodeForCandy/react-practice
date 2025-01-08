import React from 'react';
import Tasks from './Tasks';
import Button from './Button';

const ProjectTab = ({ selectedProject, setProjects }) => {
  function deleteProject() {
    setProjects(oldProjects =>
      oldProjects.filter(project => project.id !== selectedProject.id)
    );
  }
  return (
    <>
      <section id="project-details" className="flex flex-col gap-2 w-[35rem]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {selectedProject.title}
          </h2>
          <Button secondary action={deleteProject}>
            Delete
          </Button>
        </div>
        <p className="text-gray-400">
          {selectedProject.date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="whitespace-pre-wrap">{selectedProject.description}</p>
      </section>
      <hr />
      <Tasks
        taskList={selectedProject.tasks}
        setProjects={setProjects}
        projectId={selectedProject.id}
      />
    </>
  );
};

export default ProjectTab;
