// import styles from '../Section/Section.module.css';
import PropTypes from 'prop-types';
import { Card, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Card>
      {<Title>{title}</Title>}
      {children}
    </Card>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
