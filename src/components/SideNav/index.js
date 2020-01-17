import React from 'react';
import {Layout} from 'antd';
import {useState} from 'react';

import './style.css';
import CustomSider from './CustomSider';
import { PATIENT_MENU } from '../../containers/App/constants';

const {Content} = Layout;

const initialState = {
    collapsed: false
}

function SideNav({
    children
}) {

    const [state,
        setState] = useState(initialState);

    const onCollapse = collapsed => {
        setState({collapsed});
    };

    return (
        <Layout
            className={!state.collapsed
            ? "un-collapsed"
            : ""}
            style={{
            minHeight: 'calc(100vh - 75px)',
        }}>
            <CustomSider 
                handleCollapse={onCollapse} 
                collapsed={state.collapsed}
                config={PATIENT_MENU}
            />

            <Content
                style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
            }}>
                {children}
            </Content>
        </Layout>
    )
}

export default SideNav;
