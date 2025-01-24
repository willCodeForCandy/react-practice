import {
  isEmail,
  isNotEmpty,
  isEqualToOtherValue,
  hasMinLength,
} from '../util/validation';
import { useActionState } from 'react';

export default function Signup() {
  function signupAction(prevFormState, formData) {
    const enteredValues = {};
    enteredValues.email = formData.get('email');
    enteredValues.password = formData.get('password');
    enteredValues.confirmPassword = formData.get('confirm-password');
    enteredValues.firstName = formData.get('first-name');
    enteredValues.lastName = formData.get('last-name');
    enteredValues.role = formData.get('role');
    enteredValues.acquisitionChannel = formData.getAll('acquisition');
    enteredValues.terms = formData.get('terms');

    let errors = [];

    if (!isEmail(enteredValues.email)) {
      errors.push('Invalid email address');
    }
    if (
      !isNotEmpty(enteredValues.password) ||
      !hasMinLength(enteredValues.password, 6)
    ) {
      errors.push('The password must be at least 6 characters long');
    }
    if (
      !isEqualToOtherValue(
        enteredValues.password,
        enteredValues.confirmPassword
      )
    ) {
      errors.push('Passwords do not match');
    }
    if (
      !isNotEmpty(enteredValues.firstName) ||
      !isNotEmpty(enteredValues.lastName)
    ) {
      errors.push('Please provide both your first and last name');
    }
    if (!isNotEmpty(enteredValues.role)) {
      errors.push('Please select a role');
    }
    if (!enteredValues.terms) {
      errors.push('You must agreee to the terms and conditions');
    }
    if (errors.length > 0) {
      return { errors, enteredValues };
    }

    return { errors: null };
  }
  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });
  return (
    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          defaultValue={formState.enteredValues?.email}
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            defaultValue={formState.enteredValues?.firstName}
          />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            defaultValue={formState.enteredValues?.lastName}
          />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select
          id="role"
          name="role"
          defaultValue={formState.enteredValues?.role}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
              'google'
            )}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
              'friend'
            )}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
            defaultChecked={formState.enteredValues?.acquisitionChannel.includes(
              'other'
            )}
          />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>
      {formState.errors && (
        <ul className="error">
          {formState.errors.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
