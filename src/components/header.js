import React, { Component } from 'react';
import {Col, Row, Button, FormGroup, FormControl, Modal} from 'react-bootstrap'
import '../App.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchQ: '',
      name: '',
      email: '',
      phone: '',

      nameMsg: '',
      emailMsg: '',
      phoneMsg: '',
      rightData: true,

      showModal:false,
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.addContact = this.addContact.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  //close and open functions are for the modal
  close() {
    this.setState({showModal:false});
  }
  open() {
    this.setState({showModal:true});
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
    if (e.target.value.length === 0) {
      this.setState({
        nameMsg: "This field cannot be left empty",
      })
    } else {
      this.setState({
        nameMsg: "",
      })
    }
  }

  handleEmailChange(e){
    this.setState({
      email: e.target.value
    })
    if (e.target.value.length === 0) {
      this.setState({
        emailMsg: "This field cannot be left empty",
      })
    }
    if (! /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.state.email) ) {
      this.setState({
        emailMsg: "Please enter valid email.",
        rightData: false
      })
    } else {
      this.setState({
        emailMsg: "",
      })
    }
  }

  handlePhoneChange(e){
    this.setState({
      phone: e.target.value
    })

    if (e.target.value.length === 0) {
      this.setState({
        phoneMsg: "This field cannot be left empty",
      })
    }
    if ((! /^\d+$/.test(e.target.value)) || e.target.value.length < 11) {
      this.setState({
        phoneMsg: "Please enter valid phone number.",
      })
    }
    else {
      this.setState({
        phoneMsg: "",
      })
    }
  }

  handleSearchChange(e) {
    this.setState({ searchQ: e.target.value });
    this.props.updateSearchQ(e.target.value);
  }

  addContact(){
    // Name Validation
    if (this.state.name.length === 0) {
      this.setState({
        nameMsg: "Please enter the name.",
        rightData: false
      })
    }

    // Phone Validation
    if (this.state.phone.length === 0) {
      this.setState({
        phoneMsg: "Please enter the phone number.",
      })
    } else if (this.state.phone.length < 11) {
      this.setState({
        phoneMsg: "Please enter valid phone number.",
      })
    }

    //email validation
    if (this.state.email.length === 0) {
      this.setState({
        emailMsg: "Please enter email.",
      })
    }
    if (this.state.nameMsg.length === 0 && this.state.emailMsg.length === 0 && this.state.phoneMsg.length === 0) {
      var phoneNum = this.state.phone;
      phoneNum = phoneNum.split();
      var newPhoneNum = "";
      for (var i = 0; i < phoneNum.length; i++) {
        newPhoneNum+=phoneNum[i];
        if (i === 2) {
          newPhoneNum+="-";
        }else if (i === 5) {
          newPhoneNum+="-";
        }
      }
      var contact = {
        name: this.state.name,
        email: this.state.email,
        phone: newPhoneNum
      }
      console.log("Data here============");
      console.log(this.state.name);
      console.log(this.state.email);
      console.log(newPhoneNum);
      this.props.contact(contact)
      this.setState({showModal:false});
    }
  }

  render() {
    let nameMsgText;
    let emailMsgText;
    let phoneMsgText;

    if (this.state.nameMsg.length > 0) {
      nameMsgText = (
        <p>{this.state.nameMsg}</p>
      )
    }

    if (this.state.emailMsg.length > 0) {
      emailMsgText = (
        <p>{this.state.emailMsg}</p>
      )
    }

    if (this.state.phoneMsg.length > 0) {
      phoneMsgText = (
        <p>{this.state.phoneMsg}</p>
      )
    }
    return (
      <div className="header">
        <Row>
          <Col xs={4} md={3} />
          <Col xs={4} md={6}>
            <form>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Search"
                  onChange={this.handleSearchChange}/>
                <FormControl.Feedback />
              </FormGroup>
            </form>
          </Col>
          <Col xs={4} md={2}/>
          <Col xs={4} md={1}>
            <Button
              bsStyle="primary"
              className="addBtn"
              onClick={this.open}>
              Add
            </Button>
            <Modal show={this.state.showModal} onHide={this.close}>
             <Modal.Header className="modal-header" closeButton>
               <Modal.Title>Create Contact</Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <Row>
                 <form>
                   <FormGroup>
                     <FormControl
                       className="contact-field"
                       type="text"
                       maxLength={100}
                       value={this.state.name}
                       placeholder="Name"
                       onChange={this.handleNameChange}/>
                     {nameMsgText}
                     <FormControl.Feedback />
                     <FormControl
                       type="text"
                       className="contact-field"
                       value={this.state.email}
                       placeholder="Email"
                       onChange={this.handleEmailChange}/>
                     {emailMsgText}
                     <FormControl.Feedback />
                     <FormControl
                       type="text"
                       className="contact-field"
                       value={this.state.phone}
                       placeholder="Phone"
                       maxLength={11}
                       onChange={this.handlePhoneChange}/>
                     {phoneMsgText}
                     <FormControl.Feedback />
                   </FormGroup>
                   <Row>
                     <Col xs={4} md={4}/>
                     <Col xs={4} md={4}>
                       <Button
                         className="btn-create"
                         bsStyle="primary"
                         onClick={this.addContact}>
                         Create Contact
                       </Button>
                     </Col>
                     <Col xs={4} md={4}/>
                   </Row>
                 </form>
               </Row>
             </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
