import React from 'react';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';
import Wrapper from './Wrapper';
import Helmet from 'react-helmet';
import { Switch, Route, useRouteMatch } from 'react-router';
import AllDetail from '../AllDetail';
import CustomModal from '../../components/Modal';
import MedicalRecord from '../MedicalRecord';

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
                    </Switch>
                    
                </SideNav>
            </Wrapper>

            <CustomModal show={false} title='Modal for medical record'>
                <MedicalRecord />
            </CustomModal>
        </React.Fragment>
    )
}

export default PatientInfo;