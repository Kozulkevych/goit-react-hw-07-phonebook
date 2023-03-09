import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { FilteredContacts, getIsLoading, getError } from 'redux/selectors';
import { ItemContact } from '../ItemContact/ItemContact';
import { ContactsList, Text } from './ListContacts.styled';
import { Loader } from 'components/Loader/Loader';

const ListContacts = () => {
  const contacts = useSelector(FilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const list = contacts.length;
  return (
    <>
      {isLoading && !error && <Loader />}
      <ContactsList>
        {list !== 0 ? (
          contacts.map(({ id, name, number }) => (
            <ItemContact key={id} id={id} name={name} number={number} />
          ))
        ) : (
          <Text>There’s nothing here yet...</Text>
        )}
      </ContactsList>
    </>
  );
};

export default ListContacts;
