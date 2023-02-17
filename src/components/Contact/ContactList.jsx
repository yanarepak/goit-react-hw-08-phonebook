import PT from 'prop-types';
import { ContactItem } from './ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <div className={css.wrap}>
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
       <ContactItem key={id}
       name={name}
       number={number}
       id={id}/>
        );
      })}
    </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PT.arrayOf(
    PT.shape({
      id: PT.string.isRequired,
      name: PT.string.isRequired,
      number: PT.string.isRequired,
    }).isRequired
  ).isRequired,

};
