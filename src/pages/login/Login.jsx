import { Formik, Form, Field } from 'formik';
import css from '../login/Login.module.css';
import { useDispatch } from 'react-redux';
import { login } from 'redux/operation/userOperation';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmitLogin = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Login Form</h3>

      <div style={{ width: '550px', margin: '0 auto' }}>
        <Formik initialValues={initialValues} onSubmit={handleSubmitLogin}>
          {({ values, handleBlur, handleChange }) => (
            <Form className={css.form}>
              <label htmlFor="email" className={css.label}>
                Email
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={css.input}
                  required
                  value={values.email || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>

              <label htmlFor="password" className={css.label}>
                Password
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={css.input}
                  required
                  value={values.password || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <button type="submit" className={css.btn}>
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
