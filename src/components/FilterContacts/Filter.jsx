import { useDispatch } from 'react-redux';
import { onChange } from 'redux/contacts/contactFilterSlice';
import { Form, ContactInput } from './Filter.styled';

export const Input = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(onChange(e.target.value));
  };

  return (
    <Form>
      <label>
        Find contacts by name
        <ContactInput name="filter" onChange={handleFilter} />
      </label>
    </Form>
  );
};
