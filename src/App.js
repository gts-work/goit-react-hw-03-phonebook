import React, { Component } from "react";

import Title from "./components/Title";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";

import contacts from "./data/contacts.json";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    console.log("App componentDidMount");

    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate");

    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }
  }

  addContact = (id, name, number) => {
    if (!this.isEqualName(name)) {
      const contact = { id, name, number };
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  onSubmit = (data) => {
    const { id, name, number } = data;

    console.log("App ~ ID: ", id);
    console.log("App ~ name: ", name);

    this.addContact(id, name, number);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  isEqualName = (name) => {
    console.log("EQUAL: ", name);
    return this.state.contacts.find((contact) => contact.name === name);
  };

  handleDelete = (e) => {
    const contactId = e.currentTarget.value;

    console.log("DELETE: ", contactId);

    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContacts();

    return (
      <div className="container">
        <Title title="Phonebook" />
        <ContactForm onSubmit={this.onSubmit} />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={visibleContact} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
