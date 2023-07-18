import PropTypes from 'prop-types';
import "./Filter.scss"

const Filter = ({ value, onChange }) => (
  <label className='label-filter'>
    Find contacts by name
    <input className='input-filter' type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;