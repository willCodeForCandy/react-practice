import { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import ProjectTab from './components/ProjectTab';
import ProjectPlaceholder from './components/ProjectPlaceholder';
import NewProjectModal from './components/NewProjectModal';
import { createPortal } from 'react-dom';

function App() {
  const dialog = useRef();
  const [projects, setProjects] = useState([]);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const currentProject = projects.find(
    project => project.id === currentProjectId
  );

  function showProject(projectId) {
    setCurrentProjectId(projectId);
  }
  return (
    <>
      <Sidebar
        projects={projects}
        onSelectProject={showProject}
        modal={dialog}
      />
      <main className="col-span-3 mt-8 mx-8 flex flex-col gap-6 w-2/3">
        {currentProject ? (
          <ProjectTab
            selectedProject={currentProject}
            setProjects={setProjects}
          />
        ) : (
          <ProjectPlaceholder modal={dialog} />
        )}
        {createPortal(
          <NewProjectModal setProjects={setProjects} ref={dialog} />,
          document.getElementById('modal-root')
        )}
      </main>
    </>
  );
}

export default App;
