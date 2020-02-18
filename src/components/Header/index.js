import React, {useState} from 'react';
import { PageHeader, Tag, Divider } from 'antd';
import PropTypes from 'prop-types';

import './style.css';
import {LOGO} from '../../images/static';
import LogoutButton from './LogoutButton';
import PatientSummary from './PatientSummary';
import DemoDataButton from './DemoDataButton';
import {Modal, Button, Form, Spinner} from 'react-bootstrap';
import If from '../If';
import { QUAN12_DIAGNOSIS, QUAN12_APPOINTMENT } from '../../mockup';
import { test } from '../../service/AuthRequest';
import { mapOrgTypeWithData } from '../../constants/AppUtils';
import { ACCESS_TOKEN } from '../../constants/constants';

function Header({
    patientName,
    logout
}) {
    const [state, setState] = useState({
        title: 'Dữ liệu mẫu',
        showModal: false,
        type: 'diagnosis',
        org: 'quan12',
        data: '',
        loading: false,
        rows: 25,
        userInfo: null,
    });
    
    const createDemoDiagnosis = () => {
        setState({
            ...state,
            showModal: true,
            title: 'Tạo dữ liệu bệnh án mẫu',
            data: QUAN12_DIAGNOSIS,
            rows: 25,
            type: 'diagnosis',
        });
    }

    const createDemoAppointment = () => {
        setState({
            ...state,
            showModal: true,
            title: 'Tạo dữ liệu lịch hẹn mẫu',
            data: QUAN12_APPOINTMENT,
            rows: 15,
            type: 'appointment',
        });
    }

    const closeModal = () => {
        setState({
            ...state,
            showModal: false,
            org: 'quan12',
        });
    }

    const sendData = () => {
        test(state.data);
    }

    const changeDemoData = (e) => {
        setState({
            ...state,
            data: e.target.value,
        });
    }

    const changeOrg = (e) => {
        setState({
            ...state,
            org: e.target.value,
            data: mapOrgTypeWithData(e.target.value, state.type),
        });
    }

    if (!sessionStorage.getItem(ACCESS_TOKEN)) {
        window.location = '/login';
    }

    return (
        <PageHeader
            title={patientName}
            style = {{
                border: '1px solid rgb(235, 237, 240)',
                backgroundColor: 'white'
            }}
            tags={<Tag color="#FF8C00">Bệnh nhân</Tag>}
            avatar={{src: LOGO}}
            extra={[
                <DemoDataButton key="1" onClick={createDemoDiagnosis}>
                    Tạo bệnh án
                </DemoDataButton>,
                <DemoDataButton key="2" onClick={createDemoAppointment}>
                    Tạo lịch hẹn
                </DemoDataButton>,
                <LogoutButton onClick={logout} key="3">
                    Đăng xuất
                </LogoutButton>
            ]}
        >
            <PatientSummary />

            <Modal show={state.showModal} onHide={closeModal} size="lg" >
                <Modal.Header>
                    <Modal.Title>
                        {state.title}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Control as="select" defaultValue={state.org} onChange={changeOrg}>
                        <option value="quan12">Bệnh viện Quận 12</option>
                        <option value="tanphu">Bệnh viện Quận Tân Phú</option>
                    </Form.Control>
                    <Divider />
                    <Form.Control as="textarea" rows={state.rows} value={state.data} onChange={changeDemoData}/>
                    <If condition={state.loading}>
                        <div className="spinner">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            <div>
                                Đang xử lý dữ liệu...
                            </div>
                        </div>
                    </If>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={closeModal} variant="secondary" disabled={state.loading}>Đóng</Button>
                    <Button onClick={sendData} disabled={state.loading}>Gủi dữ liệu</Button>
                </Modal.Footer>
            </Modal>
        </PageHeader>
    )
}

Header.propTypes = {
    patientName: PropTypes.string.isRequired,
    logout: PropTypes.func
};

Header.defaultProps = {
    patientName: "Phan Thế Anh"
}

export default Header;