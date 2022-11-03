import { Section } from 'components/Section/Section';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { ListContacts } from 'components/ListContacts/ListContacts';
import { Input } from 'components/FilterContacts/Filter';
import { Div } from './style.styled';

export const ContactPage = () => {
  return (
    <Div>
      <Section title="Add Contact">
        <FormAddContact />
      </Section>
      <Section title="Find Contacts">
        <Input />
        <ListContacts />
      </Section>
    </Div>
  );
};
