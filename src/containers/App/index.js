import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Authorization from '../Authorization';
import Helmet from 'react-helmet';
import PatientInfo from '../PatientInfo';
import Permission from '../Permission';
import { selectDiagnosisLoading, selectAppointmentsLoading } from './selectors';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import { createStructuredSelector } from 'reselect';

function App({diagnosisLoading, appointmentLoading}) {

    return (
        <main>
            <Helmet
                titleTemplate="%s - HeREC@DMD.UIT"
                defaultTitle="HeREC@DMD.UIT"
            />
                 
            <Spin
                spinning={diagnosisLoading || appointmentLoading}
                tip="Đang tải dữ liệu..."
                size="large"
            >
                <Router>
                    <Route exact path="/">
                        <Redirect to="/login"/>
                    </Route>
                    <Route path="/login" component={Authorization}/>
                    <Route path="/patient-info" component={PatientInfo}/>
                    <Route path="/permission" component={Permission}/>
                </Router>
            </Spin>
        </main>
    );
}

const mapStateToProps = createStructuredSelector({
   diagnosisLoading: selectDiagnosisLoading(),
   appointmentLoading: selectAppointmentsLoading(), 
});

export default connect(mapStateToProps, null)(App);
