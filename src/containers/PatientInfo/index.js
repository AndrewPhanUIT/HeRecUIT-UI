import React from 'react';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';
import Wrapper from './Wrapper';
import Helmet from 'react-helmet';
import { Switch, Route, useRouteMatch } from 'react-router';
import AllDetail from '../AllDetail';
import Appointment from '../Appointment';
import Diagnosis from '../Diagnosis';
import CustomModal from '../../components/Modal';
import { selectDiagnosisLoading,
    selectAppointmentsLoading,
    selectSelectedItem,
    selectDiagnosisDetailLoading,
    selectAppointmentDetailLoading,
} from '../App/selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import MedicalRecord from '../Diagnosis/MedicalRecord';
import { isEmpty } from 'lodash';
import AppointmentDetail from '../Appointment/AppointmentDetail';
import { selectItem } from '../App/actions';
import { Spin } from 'antd';

function PatientInfo(props){

    let { path } = useRouteMatch();
    const { appointmentDetailLoading, diagnosisDetailLoading } = props;

    const renderModalInfo = () => {
        const { selectedItem } = props;
        if(isEmpty(selectedItem)) {
            return {
                title: '',
                showable: false,
                component: <div></div>
            };
        } else if (selectedItem.queryType === 'diagnosis') {
            return {
                title: 'Thông tin bệnh án',
                showable: true,
                component: <MedicalRecord key={selectedItem.key} />
            }
        } else if (selectedItem.queryType === 'appointment') {
            return {
                title: 'Thông tin lịch hẹn',
                showable: true,
                component: <AppointmentDetail key={selectedItem.key}/>
            };
        }
    }

    const closeModal = () => {
        const { deselectItem } = props;
        if (!(diagnosisDetailLoading || appointmentDetailLoading)) {
            deselectItem();
        }
    }

    const modalInfo = renderModalInfo();
    return (
        <React.Fragment>
            <Helmet>
                <title>Thông tin bệnh nhân</title>
            </Helmet>
            <Header />
            
            <Wrapper>
                <SideNav>
                    <Switch>
                        <Route exact path={path} component={AllDetail}/>
                        <Route exact path={`${path}/appointment`} component={Appointment}/>
                        <Route exact path={`${path}/diagnosis`} component={Diagnosis}/>
                    </Switch>
                </SideNav>
            </Wrapper>

            <CustomModal show={modalInfo.showable} title={modalInfo.title} onHide={closeModal}>
                <Spin size="large" tip="Đang tải dữ liệu..." spinning={appointmentDetailLoading || diagnosisDetailLoading}>
                    {modalInfo.component}
                </Spin>
            </CustomModal>
        </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    diagnosisLoading: selectDiagnosisLoading(),
    appointmentsLoading: selectAppointmentsLoading(),
    selectedItem: selectSelectedItem(),
    diagnosisDetailLoading: selectDiagnosisDetailLoading(),
    appointmentDetailLoading: selectAppointmentDetailLoading(),
})

const mapDispatchToProps = dispatch => {
    return {
        deselectItem() {
            dispatch(selectItem('', ''));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientInfo);