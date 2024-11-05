import css from './App.module.css';

import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import Layout from '../Layout/Layout.jsx';

import baseContacts from '../baseContacts.json';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [searchFilter, setSearchFilter] = useState('');

  const arreyContact = useSelector(state => state.userContacts);

  const dispatch = useDispatch();

  // const [arreyContact, setArreyContact] = useState(() => {
  //   const stringifiedArreyContact = localStorage.getItem('users');
  //   const parsedArreyContact =
  //     JSON.parse(stringifiedArreyContact) ?? baseContacts;
  //   return parsedArreyContact;
  // });

  // useEffect(() => {
  //   const stringifiedArreyContact = JSON.stringify(arreyContact);
  //   localStorage.setItem('users', stringifiedArreyContact);
  // }, [arreyContact]);

  const onAddProfile = formData => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    const action = { type: 'contacts/addContact', payload: finalUser };
    dispatch(action);

    // setArreyContact(prevState => [...prevState, finalUser]);
  };

  const onDeleteProfile = contactId => {
    const action = { type: 'contacts/deleteContact', payload: contactId };
    dispatch(action);

    // const updatedUsers = arreyContact.filter(user => user.id !== contactId);

    // setArreyContact(updatedUsers);
  };

  const userFilter = arreyContact.contacts.items.filter(item =>
    item.name.toLowerCase().includes(searchFilter.toLowerCase().trim())
  );

  return (
    <div className={css.patternBackground}>
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onAddProfile={onAddProfile} />
        <SearchBox
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
        />
        <ContactList
          userFilter={userFilter}
          onDeleteProfile={onDeleteProfile}
        />
      </Layout>
    </div>
  );
};

export default App;
