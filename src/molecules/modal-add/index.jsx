import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PostIndex from '../post-index';

export default class ModalAdd extends Component {
  render(){
    return(
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Добавление сорта
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PostIndex />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" form="add">Добавить</Button>
          <Button onClick={this.props.onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}