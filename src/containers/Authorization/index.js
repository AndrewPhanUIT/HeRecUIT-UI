import React from 'react'
import Helmet from 'react-helmet';

import Wrapper from './Wrapper';
import Left from './Left';
import LeftPaneAuth from '../../components/LeftPaneAuth';
import RightPaneAuth from '../../components/RightPaneAuth';
import styled from 'styled-components';

const ContentWrapper = styled.section `
    height: 100vh;
`;

function Authorization() {
    return (
        <Wrapper>
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>
            <main className="container-fluid">
                <ContentWrapper className="row align-items-center">
                    <Left className="col-md-12 col-lg-6 p-lg-0 mt-lg-3">
                        <LeftPaneAuth
                            title="Bệnh nhân"
                            subTitle="HeREC@DMD.UIT cung cấp hệ thống lưu trữ hồ sơ bệnh án của từng bệnh nhân nhằm giúp bệnh nhân chủ động hơn trong việc theo dõi sức khỏe bản thân."/>
                    </Left>

                    <section className="col-md-12 col-lg-6 p-lg-0">
                        <RightPaneAuth type="login"/>
                    </section>
                </ContentWrapper>
            </main>
        </Wrapper>
    )
}

export default Authorization;