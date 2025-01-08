import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

const NewProjectModal = ({ setProjects, ref }) => {
  const [error, setError] = useState('');
  function closeDialog() {
    ref.current.close();
  }
  function addNewProject(e) {
    const form = e.target.form;
    const title = form.title.value.trim(); // Elimina espacios al inicio y al final
    const description = form.description.value.trim();
    const date = form.date.value;

    // Validar que los campos no estén vacíos
    if (!title || !description || !date) {
      setError('Please complete all fields before saving');
      return; // Detenemos la ejecución si hay campos vacíos
    }
    setError('');
    setProjects(oldProjects => [
      ...oldProjects,
      {
        id: Date.now(),
        title,
        description,
        date: new Date(date),
        tasks: [],
      },
    ]);
    form.reset();
    ref.current.close();
  }
  return (
    <dialog
      ref={ref}
      className="p-8 backdrop:bg-stone-900/90 rounded-md shadow-md"
    >
      <form
        id="new-project"
        className="flex flex-col gap-2 justify-between w-[35rem]"
      >
        <menu className="flex gap-4 justify-end items-center my-4 order-first">
          <li>
            <Button action={closeDialog} secondary>
              Cancel
            </Button>
          </li>
          <li>
            <Button action={addNewProject} form="new-project">
              Save
            </Button>
          </li>
        </menu>
        {error && <p>{error}</p>}
        <Input name="title" id="title-input">
          Title
        </Input>
        <Input textarea id="description-input" name="description">
          Description
        </Input>
        <Input type="date" name="date" id="date-input">
          Due Date
        </Input>
      </form>
    </dialog>
  );
};

export default NewProjectModal;
