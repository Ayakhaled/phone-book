import React, { Component } from 'react';
import {Col, Row } from 'react-bootstrap';
import '../App.css';

class PhoneBookHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="phonebook-header">
        <Row>
          <Col xs={4} md={3} />
          <Col xs={4} md={6} >
            Phone Book
          </Col>
          <Col xs={4} md={3}/>
        </Row>
      </div>
    );
  }
}

export default PhoneBookHeader;
