import { useDispatch, useSelector } from 'react-redux';
import {
  ContactButton,
  ListContact,
  ListEl,
  StyledSearchInput,
} from './ContactList.styled';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';
import { getTasks } from 'redux/selectors';
 

export const ContactList = () => {

  const dispatch = useDispatch();

  // отримуємо частини стану
  const { items, isLoading, error } = useSelector(getTasks);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

   // Рендерим розмітку в залежності від значень у стані
  return (
    <>
      <h2>Contacts</h2>
      <StyledSearchInput
        type="text"
        name="filter"
        placeholder="Search by name"
      />
      <ListContact>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          items.map((contact) => (
            <ListEl key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
              <ContactButton>Delete</ContactButton>
            </ListEl>
          ))
        )}
      </ListContact>
    </>
  );
};
