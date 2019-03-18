import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const DeleteVarietyButton = ({id}) =>{
  let onClick =() =>{
    document.location.href = "/list-of-variates"; //<<<-Костыль
    axios({
      method: `DELETE`,
      url: `http://localhost:3001/apple/` + id
    });
  }

    return(
      <Button 
        onClick={onClick}
        variant="danger">
        Удалить
      </Button>
    )
}
export default DeleteVarietyButton;