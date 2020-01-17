import React from 'react';
import {Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Button } from 'antd';

function CustomModal({
    show, onHide, title,
    children
}) {
    return (
        <Modal show={show} size="lg" >
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {children}
            </Modal.Body>

            <Modal.Footer>
                <Button>Đóng</Button>
            </Modal.Footer>
        </Modal>
    )
}

CustomModal.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
}

CustomModal.defaultProps = {
    title: 'Tiêu đề modal',
    show: true
}


export default CustomModal;