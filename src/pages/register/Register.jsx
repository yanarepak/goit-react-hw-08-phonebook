import { Formik, Form, Field } from 'formik';
import css from '../register/Register.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operation/userOperation';

const Register = () => {
  const initiaValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Registration Form</h3>

      <div style={{ width: '550px', margin: '0 auto' }}>
        <Formik initiaValues={initiaValues} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form className={css.form}>
              <label htmlFor="name" className={css.label}>
                Email
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={css.input}
                  required
                  value={values.name || ''}
                />
              </label>

              <label htmlFor="email" className={css.label}>
                Email
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className={css.input}
                  required
                  value={values.email || ''}
                />
              </label>

              <label htmlFor="password" className={css.label}>
                Password
                <Field
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  className={css.input}
                  required
                  value={values.password || ''}
                />
              </label>

              <button type="submit" className={css.btn}>
                Registration
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Register;
