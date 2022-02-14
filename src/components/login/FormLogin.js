import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FormLogin = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username : </label>
            <Field type="input" component="input" name="username" />
        </div>
        <div>
            <label>Password : </label>
            <Field type="password" component="input" name="password" />
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
  );
};

export default reduxForm({
  form: "login", // a unique identifier for this form
})(FormLogin);