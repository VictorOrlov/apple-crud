import React from 'react';
import { Button } from 'react-bootstrap';
import PostIndex from '../../molecules/post-index';
import TemplateModal from '../../molecules/template-modal';

const ModalAdd = ({onHide, show}) => (
  <TemplateModal
    title="Добавление сорта"
    show={show}
    body={<PostIndex formId="add"/>}>
    <Button type="submit" form="add">Добавить</Button>
    <Button onClick={onHide}>Закрыть</Button>
  </TemplateModal>
);

export default ModalAdd;