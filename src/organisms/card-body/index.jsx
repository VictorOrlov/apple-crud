import React, {Component} from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Card from '../../molecules/card';
import ModalPut from '../modal-put';


export default class CardBody extends Component{
  state = { 
    modalShow: false, 
  };
  render(){
    const { item } = this.props;
    let modalClose = () => this.setState({ modalShow: false });
    return(
      <Card
        col1={<span><strong>Название сорта: </strong>{item.name}</span>}
        col2={item.date}
        col3={item.description}
        >
        <ButtonToolbar className="justify-content-center">
          <Button
            variant="success"
            onClick={() => this.setState({ modalShow: true })}
          >
            Редактировать
          </Button>
          <ModalPut
            show={this.state.modalShow}
            onHide={modalClose}
            defName={item.name}
            defDesc={item.description}
            id={item.id}
          />
        </ButtonToolbar>
      </Card>
    );
  }
}

