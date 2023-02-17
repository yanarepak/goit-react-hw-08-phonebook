import { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/Contact/ContactList'; 
import { Filter } from 'components/Filter/Filter'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation/contactOperation';
import { selectIsLoggedIn } from 'redux/selectors';


const Contacts = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(isLoggedIn){
      dispatch(fetchContacts())
    }
  },[dispatch, isLoggedIn])

  const filterContactsList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ width: '550px', margin: '0 auto' }}>
      
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? <ContactList contacts={filterContactsList} /> : <p>You contacts list is empty</p> }
      
    </div>
  );
};

export default Contacts;