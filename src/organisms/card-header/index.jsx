import React from 'react';
import s from './CardHeader.module.css';
import Card from '../../molecules/card';

const CardHeader = ({ select }) => {
  let col2 = <h5>Дата добавления</h5>;
  let col3 = <h5>Описание</h5>
  return(
  <Card
    style={`${s.header_table} justify-content-center`}
    col1={select}
    col2={col2}
    col3={col3} />
  );
}
export default CardHeader;