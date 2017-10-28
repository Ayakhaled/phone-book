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
        {
          name: "Nihal Ahmed",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11881",
        },
        {
          name: "Yomna Gad",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11991",
        },
        {
          name: "Fatma Mohamed",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11771",
        },
        {
          name: "Fatma Taha",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11881",
        },
        {
          name: "Hadeer Karem",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11991",
        },
        {
          name: "Omar Essam",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11771",
        },
        {
          name: "Karim Ahmed",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11881",
        },
        {
          name: "Nada Dia",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11991",
        },
        {
          name: "Nourhan Taymour",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11771",
        },
        {
          name: "Nancy Adel",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11881",
        },
        {
          name: "Yassmin",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11991",
        },
        {
          name: "Rana",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11771",
        },
        {
          name: "Mohamed Salah",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11881",
        },
        {
          name: "Abdulaziz Alaa",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11991",
        },
        {
          name: "Ali Korayem",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11771",
        },
        {
          name: "Amira Khaled",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11881",
        },
        {
          name: "Mama",
          email: "ayakhaled123@gmail.com",
          phone: "011-186-11991",
        },
        {
          name: "Dad",
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
    var contactsData = this.state.contacts;
    contactsData = contactsData.sort(function (a,b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
    var searchRes = [];
    var phones = [];
    for (var i = 0; i < contactsData.length; i++) {
      var phoneNum = contactsData[i].phone;
      phones.push(phoneNum.slice(0,3)+phoneNum.slice(4,7)+phoneNum.slice(8))
    }
    if (this.state.searchQ.length === 0) {
      searchRes = contactsData;
    } else {
      searchRes = [];
      for (var i = 0; i < contactsData.length; i++) {
          var a = contactsData[i].name;
          var phone = phones[i];
          if (a.toUpperCase().indexOf((this.state.searchQ).toUpperCase()) > -1) {
              searchRes.push(contactsData[i])
          }
          else if (phone.indexOf(this.state.searchQ) > -1) {
            searchRes.push(contactsData[i])
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
