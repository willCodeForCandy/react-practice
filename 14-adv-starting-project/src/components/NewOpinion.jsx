import { useActionState, use } from 'react';
import { isEmpty, isTooShort } from '../utils/validation';
import { OpinionsContext } from '../store/opinions-context';
import Submit from './Submit';

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);
  async function action(prevState, formData) {
    const name = formData.get('userName');
    const title = formData.get('title');
    const message = formData.get('body');
    let errors = [];
    if (isEmpty(name) || isEmpty(message) || isEmpty(title)) {
      errors.push('All fields are required');
    }
    if (isTooShort(message, 20)) {
      errors.push('The message needs to be at least 20 characters long');
    }

    if (errors.length === 0) {
      await addOpinion({ title, body: message, userName: name });
      return { errors };
    }
    return {
      errors,
      enteredValues: { name, title, message },
    };
  }
  const [formState, formAction] = useActionState(action, { errors: [] });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.name}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.message}
          ></textarea>
        </p>
        {formState.errors.length > 0 && (
          <ul>
            {formState.errors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}
