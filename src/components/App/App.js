import { Component } from 'react';
import ContactForm from '../Form';
import Filter from '../Filter';
import ContactList from '../ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilter = ({currentTarget: {value}}) => {
    this.setState({
      filter: value,
    });
  };

  addNewContact = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };
  delContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  }
  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilter} />
        <ContactList contacts={visibleContacts} delContact={this.delContact} />
      </div>
    );
  }
}

export default App;
