import React, { Component } from 'react';
import Header from './components/header';
import PhoneBook from './components/phoneBook';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      newContact: {},
      searchQ: '',
      contacts: [
        {
          name: "Aya Khaled",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11881",
        },
        {
          name: "Samia Khaled",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11991",
        },
        {
          name: "Mai Khaled",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11771",
        },
      ]
    },
    this.addNewContact = this.addNewContact.bind(this);
    this.updateSearchQ = this.updateSearchQ.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addNewContact(val){
    var arr = this.state.contacts;
    arr.push(val)
    this.setState({
      contacts: arr
    });
  }

  updateSearchQ(val){
    this.setState({
      searchQ: val
    })
  }

  removeContact(index){
    var newArr = this.state.contacts;
    newArr.splice(index, 1);
    this.setState({
      contacts: newArr
    });
  }

  render() {
    var searchRes = [];
    var phones = [];
    for (var i = 0; i < this.state.contacts.length; i++) {
      var phoneNum = this.state.contacts[i].phone;
      phones.push(phoneNum.slice(0,3)+phoneNum.slice(4,7)+phoneNum.slice(8))
    }
    if (this.state.searchQ.length === 0) {
      searchRes = this.state.contacts
    } else {
      searchRes = [];
      for (var i = 0; i < this.state.contacts.length; i++) {
          var a = this.state.contacts[i].name;
          var phone = phones[i];
          if (a.toUpperCase().indexOf((this.state.searchQ).toUpperCase()) > -1) {
              searchRes.push(this.state.contacts[i])
          }
          else if (phone.indexOf(this.state.searchQ) > -1) {
            searchRes.push(this.state.contacts[i])
          }
      }
    }

    return (
      <div className="App">
        <Header contact={this.addNewContact} updateSearchQ={this.updateSearchQ}/>
        <PhoneBook contacts={searchRes} searchQ={this.state.searchQ} removeContact={this.removeContact}/>
      </div>
    );
  }
}

export default App;
