import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalAdd from '../../molecules/modal-add';



export default class GroupButton extends Component{
  state = { 
    modalShow: false, 
  };

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
          <ButtonToolbar className="justify-content-center">
            <Button
              variant="success"
              onClick={() => this.setState({ modalShow: true })}
            >
              Добавить
            </Button>
            {this.props.delete}
            <Link to={`/view-variaty/${this.props.viewLink}`}>
              <Button variant="info">Просмотр</Button>
            </Link>
            <ModalAdd
              show={this.state.modalShow}
              onHide={modalClose}
            />
          </ButtonToolbar>
    );
  }
}
