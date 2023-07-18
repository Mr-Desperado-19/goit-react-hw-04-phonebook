import PropTypes from 'prop-types';
import "./ContactItem.scss"

const ContactItem = ({ name, number, onDelete }) => (
  <li className='contact_item'>
    {name}: {number}
    <button className='btn_delete' type="button" onClick={onDelete}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;