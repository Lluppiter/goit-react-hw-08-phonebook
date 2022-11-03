import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactOperations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactSelector';
import { Button, Input, Form } from './FormAddContact.styled';

export const FormAddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = e => {
    e.preventDefault();
    const newContact = {
      name,
      number,
    };
    const overlap = contacts.filter(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() &&
        contact.number.toLowerCase() === number.toLowerCase()
    );
    if (overlap.length === 0) {
      dispatch(addContact(newContact));
    } else {
      alert('This contact has been added');
    }
    reset();
  };

  return (
    <Form onSubmit={onSubmit}>
      {/* <div className={styles.formItem}> */}
      <label>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      {/* </div> */}
      {/* <div className={styles.formItem}> */}
      <label>
        Number:
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      {/* </div> */}
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
