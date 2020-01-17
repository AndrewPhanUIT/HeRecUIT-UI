import React from 'react';
import { PageHeader, Tag } from 'antd';
import PropTypes from 'prop-types';

import './style.css';
import {LOGO} from '../../images/static';
import LogoutButton from './LogoutButton';
import PatientSummary from './PatientSummary';

function Header({
    patientName,
    logout
}) {
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
                <LogoutButton onClick={logout} key="1">
                    Đăng xuất
                </LogoutButton>
            ]}
        >
            <PatientSummary />
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