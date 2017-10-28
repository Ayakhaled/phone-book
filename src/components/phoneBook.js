import React, { Component } from 'react';
import {Col, Row, Button } from 'react-bootstrap';
import PhoneBookHeader from './phoneBookHeader';
import PhoneBookCont from './phoneBookCont';
import '../App.css';

class PhoneBook extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactsPerPage: 10,
      activePage: 1,
    }
  }

  render() {
    var contactsArr = [];
    var limit = 10;

    var pages = Math.ceil((this.props.contacts.length)/this.state.contactsPerPage);
    var pagesArr = [];
    for (var i = 0; i < pages; i++) {
      pagesArr.push(i+1)
    }

    if (this.props.contacts.length < 10) {
      limit = this.props.contacts.length;
    } else if (pagesArr.length === this.state.activePage) {
      limit = (this.props.contacts.length - ((this.state.activePage-1)*10))
    }
    for (var i = (this.state.activePage-1)*10; i < limit+((this.state.activePage-1)*10); i++) {
      contactsArr.push(this.props.contacts[i])
    }



    let pagesNum = pagesArr.map((item, index) => (
      <Button key={index} onClick={()=>{this.setState({activePage:(index+1)});console.log(index+1);}}>{item}</Button>
    ))
    return (
      <div className="parent-cont">
        <Row>
          <Col xs={4} md={3} />
          <Col xs={4} md={6} className="phoneBookCont">
            <PhoneBookHeader />
            <PhoneBookCont contacts={contactsArr} removeContact={this.props.removeContact}/>
            <div className="page-num-cont">
              <Row>
                {pagesNum}
              </Row>
            </div>
          </Col>
          <Col xs={4} md={3}/>
        </Row>
      </div>
    );
  }
}

export default PhoneBook;
