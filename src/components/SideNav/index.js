import React from 'react';
import {Layout, Spin} from 'antd';
import {useState} from 'react';

import './style.css';
import CustomSider from './CustomSider';
import {PATIENT_MENU} from '../../containers/App/constants';
import {selectDiagnosisLoading, selectAppointmentsLoading} from '../../containers/App/selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

const {Content} = Layout;

const initialState = {
    collapsed: false
}

function SideNav({children, diagnosisLoading, appointmentsLoading}) {

    const [state,
        setState] = useState(initialState);

    const onCollapse = collapsed => {
        setState({collapsed});
    };

    return (

        <Spin
            spinning={diagnosisLoading || appointmentsLoading}
            tip="Đang tải dữ liệu..."
            size="large">
            <Layout
                className={!state.collapsed
                ? "un-collapsed"
                : ""}
                style={{
                minHeight: 'calc(100vh - 75px)'
            }}>
                <CustomSider
                    handleCollapse={onCollapse}
                    collapsed={state.collapsed}
                    config={PATIENT_MENU}/>

                <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff'
                }}>
                    {children}
                </Content>
            </Layout>
        </Spin>
    )
}

const mapStateToProps = createStructuredSelector({diagnosisLoading: selectDiagnosisLoading(), appointmentsLoading: selectAppointmentsLoading()});

export default connect(mapStateToProps)(SideNav);
