import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';
import { addContact } from 'redux/operation/contactOperation';
import { useDispatch, useSelector } from 'react-redux';


let schema = yup.object().shape({
  name: yup
    .string()
    .min(8)
    .max(80)
    .required(
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .min(8)
    .required(
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  // console.log(contacts);

  const onHandleSubmitForm = (values, { resetForm }) => {
    const newContact = {
      number: values.number,
      name: values.name,
    };

    console.log(newContact)

    contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact(newContact));

    resetForm();
  };

  return (
    <div style={{marginBottom: '20px'}}>
      <Formik
        initialValues={initialValues}
        onSubmit={onHandleSubmitForm}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              className={css.input}
            />
            <ErrorMessage component="div" name="name" className={css.message} />
          </label>
          <label htmlFor="number" className={css.label}>
            Number
            <Field
              type="tel"
              name="number"
              id="number"
              placeholder="Enter phone number"
              className={css.input}
            />
            <ErrorMessage
              component="div"
              name="number"
              className={css.message}
            />
          </label>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};