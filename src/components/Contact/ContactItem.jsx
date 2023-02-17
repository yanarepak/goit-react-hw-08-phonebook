import css from './ContactList.module.css';
import { deleteContact } from 'redux/operation/contactOperation';
import { useDispatch } from 'react-redux';

export const ContactItem = ({id, name, number}) =>{
  const dispatch = useDispatch()
  
    return (
        <li className={css.item}>
        <span>
          {name}: {number}
        </span>
        <button className={css.btn} type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </li> 
    )
}