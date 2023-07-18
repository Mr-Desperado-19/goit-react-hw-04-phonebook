import React, { Component } from 'react';
import "./ContactForm.scss"

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    this.props.onAdd(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className='phonebook_form' onSubmit={this.handleSubmit}>
        <label className='label-name'>
          Name
          <input className='input-name' type="text" name="name" value={name} onChange={this.handleChange} />
        </label>
        <label className='label-number'>
          Number
          <input
            className='input-number'
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button className='form-btn' type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;