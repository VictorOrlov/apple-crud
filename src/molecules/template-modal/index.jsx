import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class TemplateModal extends Component {
  render(){
    return(
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.body}
        </Modal.Body>
        <Modal.Footer>
          {this.props.children}
        </Modal.Footer>
      </Modal>
    );
  }
}