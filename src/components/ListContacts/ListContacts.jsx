import { ItemContacts } from './ItemContacts/ItemContacts';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLoader,
  selectError,
  selectVisibleContacts,
} from 'redux/contacts/contactSelector';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/contactOperations';
import { selectIsLogedIn } from 'redux/auth/authSelector';
import { Ul } from './ListContact.styled';

export const ListContacts = () => {
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLogedIn = useSelector(selectIsLogedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogedIn) {
      dispatch(getContacts());
    }
  }, [dispatch, isLogedIn]);

  return (
    <>
      <h2>Contacts</h2>
      {isLoading && <h1>LOADING...</h1>}
      {!isLoading && visibleContacts.length > 0 ? (
        <Ul>
          <ItemContacts visibleContacts={visibleContacts} />
        </Ul>
      ) : (
        <p>
          You have not added a contact yet, please use the form "Add Contact"
        </p>
      )}
      {error && <p>We have some problem: "{error.message}"</p>}
    </>
  );
};
