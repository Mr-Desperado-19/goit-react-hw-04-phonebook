import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from '../contactForm/ContactForm';
import ContactList from '../contactList/ContactList';
import Filter from '../filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');

    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isContactExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div className='container'>
        <h1 className='title'>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2 className='title'>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;