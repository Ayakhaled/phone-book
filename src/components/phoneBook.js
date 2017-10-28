import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import PhoneBookHeader from './phoneBookHeader';
import PhoneBookCont from './phoneBookCont';
import '../App.css';

class PhoneBook extends Component {

  render() {
    return (
      <div className="parent-cont">
        <Row>
          <Col xs={4} md={3} />
          <Col xs={4} md={6} className="phoneBookCont">
            <PhoneBookHeader />
            <PhoneBookCont contacts={this.props.contacts} removeContact={this.props.removeContact}/>
          </Col>
          <Col xs={4} md={3}/>
        </Row>
      </div>
    );
  }
}

export default PhoneBook;
