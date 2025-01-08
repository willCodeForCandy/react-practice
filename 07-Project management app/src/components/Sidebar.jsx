import Button from './Button';

const Sidebar = ({ projects, onSelectProject, modal }) => {
  return (
    <aside className="w-1/3 bg-zinc-950 rounded-tr-xl mt-8 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="md:text-xl font-bold uppercase mb-8 ">Your Projects</h2>
      <Button action={() => modal.current.showModal()}>+ Add project</Button>
      <ul id="project-list" className="flex flex-col gap-1">
        {projects?.length > 0 &&
          projects.map(project => (
            <li
              key={project.id}
              className="flex-1 py-2 px-2 rounded-md text-zinc-400 font-semibold hover:bg-zinc-800 hover:text-zinc-300"
              onClick={() => onSelectProject(project.id)}
            >
              {project.title}
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
