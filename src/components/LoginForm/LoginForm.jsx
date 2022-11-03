import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/authOperations';
import { Form, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          Email:
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">login</Button>
      </Form>
    </>
  );
};
