import React from 'react';
import { Button } from 'react-bootstrap';
import PutIndex from '../../molecules/put-index';
import TemplateModal from '../../molecules/template-modal';

const ModalPut = ({ onHide, show, defName, defDesc, id }) => (
  <TemplateModal
    title="Редактирование сорта"
    show={show}
    body={<PutIndex
      defName={defName || 'Название'}
      defDesc={defDesc || 'Описание'}
      id={id} />}>
    <Button type="submit" form="put">Добавить</Button>
    <Button onClick={onHide}>Закрыть</Button>
  </TemplateModal>
);

export default ModalPut;