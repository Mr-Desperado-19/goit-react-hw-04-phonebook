import PropTypes from 'prop-types';
import ContactItem from '../contactItem';

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} name={name} number={number} onDelete={() => onDelete(id)} />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;