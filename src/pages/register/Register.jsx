import { Formik, Form, Field } from 'formik';
import css from '../register/Register.module.css';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operation/userOperation';

const Register = () => {
 
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Registration Form</h3>

      <div style={{ width: '550px', margin: '0 auto' }}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>

        {({ values, handleChange, handleBlur }) => (
            <Form className={css.form} >
              <label htmlFor="name" className={css.label}>
                Email
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={css.input}
                  required
                  value={values.name || ''}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id='name'
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id='email'
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  id='password'
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
