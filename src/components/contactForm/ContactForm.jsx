import React, { useState } from 'react';
import './ContactForm.scss';

const ContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onAdd(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className='phonebook_form' onSubmit={handleSubmit}>
      <label className='label-name'>
        Name
        <input
          className='input-name'
          type='text'
          name='name'
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className='label-number'>
        Number
        <input
          className='input-number'
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button className='form-btn' type='submit'>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;