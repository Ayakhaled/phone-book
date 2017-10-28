import React, { Component } from 'react';
import {Col, Row, Button, FormGroup, FormControl} from 'react-bootstrap';
import '../App.css';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.contact.name,
      email: this.props.contact.email,
      phone: this.props.contact.phone,
      index: this.props.i,
    }
  }

  render() {
    return (
      <div>
        <Col xs={4} md={6}>
          <Row>
            <div className="info">
              <p>{this.props.contact.name}</p>
              <p className="email">{this.props.contact.email}</p>
            </div>
          </Row>
          <Row>
            <div className="phone-num">
              <p>{this.props.contact.phone}</p>
            </div>
          </Row>
        </Col>
        <Col xs={4} md={5}/>
        <Col xs={4} md={1}>
          <img
            onClick={()=>{this.props.removeContact(this.props.i)}}
            className="bin" src={require('./b.png')} />
        </Col>
      </div>
    );
  }
}

export default Contact;
