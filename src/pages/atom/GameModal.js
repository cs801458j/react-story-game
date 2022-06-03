import React from 'react';
import { Modal } from 'antd';

const GameModal = ({
  modalTitle,
  modalVisible,
  handleCancel,
  handleOk,
  modalText,
  modalOkText,
  modalCancelText,
}) => {
  return (
    <Modal
      title={modalTitle}
      visible={modalVisible}
      onOk={handleCancel}
      onCancel={handleOk}
      okText={modalOkText}
      cancelText={modalCancelText}
    >
      <p>{modalText}</p>
    </Modal>
  );
};

export default GameModal;
