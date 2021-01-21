import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import '../sass/Modal.scss';

function DetailModal(props) {
    console.log('modal render');
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {props.trackDetail?props.trackDetail.artists[0].name:''}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
              src={props.trackDetail?props.trackDetail.album.images[0].url:''}
              alt={props.trackDetail?props.trackDetail.name:''}>                    
          </img>
            
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export default DetailModal