import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Contact from './contact'
import '../App.css';

class PhoneBookCont extends Component {
  constructor(props){
    super(props);
    this.state = {
      newContact: {},
      contacts: this.props.contacts,
    }
  }

  componentWillReceiveProps(){
      this.setState({
        contacts: this.props.contacts
      })
  }

  render() {
    var contactsData = [];
    contactsData = this.props.contacts;

    let contacts = contactsData.map((item, index) => (
      <Row className="contact-cont" key={index}>
        <Contact i={index} contact={item} removeContact={this.props.removeContact}/>
      </Row>
    ))
    return (
      <div className="phonebook-cont">
        {contacts}
      </div>
    );
  }
}

export default PhoneBookCont;
