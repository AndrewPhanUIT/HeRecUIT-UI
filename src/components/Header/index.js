import React, {useState, useEffect, useRef} from 'react';
import { PageHeader, Tag, Divider, Spin, message } from 'antd';
import PropTypes from 'prop-types';

import './style.css';
import {LOGO} from '../../images/static';
import LogoutButton from './LogoutButton';
import PatientSummary from './PatientSummary';
import DemoDataButton from './DemoDataButton';
import {Modal, Button, Form, Spinner} from 'react-bootstrap';
import If from '../If';
import { QUAN12_DIAGNOSIS, QUAN12_APPOINTMENT } from '../../mockup';
import { mapOrgTypeWithData } from '../../constants/AppUtils';
import { ACCESS_TOKEN } from '../../constants/constants';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectError, selectLoadingAddNewRecord } from '../../containers/App/selectors';
import { addDiagnosis, addAppointment, clearErrorMess } from '../../containers/App/actions'
import { isEmpty } from 'lodash';
import { usePrevious } from '../customHook';

function Header({
    patientName,
    logout,
    error,
    loadingAddNewRecord,
    addDiagnosis,
    addAppointment,
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
    // function usePrevious(value) {
    //     const ref = useRef();
    //     useEffect(() => {
    //       ref.current = value;
    //     });
    //     return ref.current;
    // }
    const prevProps = usePrevious({ error, loadingAddNewRecord});
    useEffect(() => {
        if (!isEmpty(error)) {
            message.error(error);
            clearErrorMess();
        } else if (prevProps && isEmpty(error) && prevProps.loadingAddNewRecord && !loadingAddNewRecord) {
            message.info("Thêm dữ liệu trạng thái cho bệnh nhân thành công!");
            if (!loadingAddNewRecord) {
                setState({
                    ...state,
                    showModal: false,
                    org: 'quan12',
                });
            }
            window.location = '/patient-info';
        }
    }, [error, loadingAddNewRecord]);
    
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
        if (!loadingAddNewRecord) {
            setState({
                ...state,
                showModal: false,
                org: 'quan12',
            });
        }
    }

    const sendData = () => {
        if (state.type === 'appointment') {
            addAppointment(state.data);
        } else if (state.type === 'diagnosis') {
            addDiagnosis(state.data);
        }
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
                <Spin spinning={loadingAddNewRecord} tip="Đang xử lý dữ liệu ..." size="large">
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
                </Spin>
            </Modal>
        </PageHeader>
    )
}

Header.propTypes = {
    patientName: PropTypes.string.isRequired,
    logout: PropTypes.func,
    error: PropTypes.string,
    loadingAddNewRecord: PropTypes.bool,
    addDiagnosis: PropTypes.func,
    addAppointment: PropTypes.func,
};

Header.defaultProps = {
    patientName: "Phan Thế Anh"
}

const mapStateToProps = createStructuredSelector({
    error: selectError(),
    loadingAddNewRecord: selectLoadingAddNewRecord(),
});

const mapDispatchToProps = dispatch => {
    return {
        addDiagnosis(json) {
            dispatch(addDiagnosis(json));
        },
        addAppointment(json) {
            dispatch(addAppointment(json));
        },
        clearErrorMess() {
            dispatch(clearErrorMess());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);