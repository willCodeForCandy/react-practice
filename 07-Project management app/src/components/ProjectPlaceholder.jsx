import React from 'react';
import notepadPic from '../assets/no-projects.png';
import Button from './Button';
const ProjectPlaceholder = ({ modal }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-8">
      <img
        src={notepadPic}
        alt="Empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-yellow-900">No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <Button action={() => modal.current.showModal()}>
        Create new project
      </Button>
    </div>
  );
};

export default ProjectPlaceholder;
