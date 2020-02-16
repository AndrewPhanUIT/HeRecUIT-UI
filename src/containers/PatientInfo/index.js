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
import MedicalRecord from '../MedicalRecord';
import { selectDiagnosisLoading, selectAppointmentsLoading } from '../App/selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

function PatientInfo(){

    let { path } = useRouteMatch();

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

            <CustomModal show={false} title='Thông tin khám sức khỏe'>
                <MedicalRecord />
            </CustomModal>
        </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    diagnosisLoading: selectDiagnosisLoading(),
    appointmentsLoading: selectAppointmentsLoading(),
})

export default connect(mapStateToProps)(PatientInfo);