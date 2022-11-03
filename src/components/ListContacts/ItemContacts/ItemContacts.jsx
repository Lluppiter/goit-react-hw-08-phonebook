import styles from '../ItemContacts/ItemContacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactOperations';

export const ItemContacts = ({ visibleContacts }) => {
  const dispatch = useDispatch();

  return (
    <>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} id={id} className={styles.listItem}>
          <p className={styles.itemText}>
            <span>{name}</span>:<span>{number}</span>
          </p>
          <button
            className={styles.itemBtn}
            type="button"
            value={id}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            X
          </button>
        </li>
      ))}
    </>
  );
};
