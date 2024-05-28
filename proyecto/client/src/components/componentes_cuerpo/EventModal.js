import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EventModal = ({ isOpen, onClose, onSave, date }) => {
  const [title, setTitle] = useState('');

  const handleSave = () => {
    onSave({ date, title });
    setTitle('');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Añadir Evento para {date.toDateString()}</h5>
          <button type="button" className="close" onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="title">Título del evento</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingrese el título del evento"
            />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            Guardar Evento
          </button>
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EventModal;
  