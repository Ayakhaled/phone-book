import React, { Component } from 'react';
import {Col, Row, Button, FormGroup, FormControl} from 'react-bootstrap';
import '../App.css';

class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: ''
    }
  }

  render() {
    return (
      <div className="parent-cont">
        <Row>
          <form>
            <FormGroup>
              <FormControl
                type="text"
                value={this.state.name}
                placeholder="Name"/>
              <FormControl.Feedback />
              <FormControl
                type="text"
                value={this.state.email}
                placeholder="Email"/>
              <FormControl.Feedback />
              <FormControl
                type="text"
                value={this.state.phone}
                placeholder="Phone"/>
              <FormControl.Feedback />
            </FormGroup>
            <Button
              bsStyle="primary"
              onClick={this.open}>
              Create Contact
            </Button>
          </form>
        </Row>
      </div>
    );
  }
}

export default ContactForm;
