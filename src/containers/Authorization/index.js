import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import Wrapper from './Wrapper';
import Left from './Left';
import LeftPaneAuth from '../../components/LeftPaneAuth';
import RightPaneAuth from '../../components/RightPaneAuth';
import styled from 'styled-components';
import {login, register} from '../App/actions';
import { selectUserLoading, selectUserInfo, selectUserErrorStatus } from '../App/selectors';
import { createStructuredSelector } from 'reselect';
import { message } from 'antd';
import { withRouter } from 'react-router';


const ContentWrapper = styled.section `
    height: 100vh;
`;

class Authorization extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        const { userInfo, history } = this.props;
        if(userInfo ) {
            // window.location = '/patient-info';
            history.push('/patient-info');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { userInfo: prevUserInfo} = prevProps;
        const { userInfo, userInfoErrorStatus, history } = this.props;
        if(userInfoErrorStatus && userInfo && userInfoErrorStatus === 200) {
            message.info('Đăng nhập thành công');
        }
        if(!prevUserInfo && userInfo ) {
            history.push('/patient-info');
        }
        if(userInfoErrorStatus && userInfoErrorStatus !== 200) {
            message.error('Vui lòng kiểm tra lại số điện thoại và mật khẩu!');
        }
    }

    render() {
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
                            <RightPaneAuth type="login" {...this.props} />
                        </section>
                    </ContentWrapper>
                </main>
            </Wrapper>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    userInfoLoading: selectUserLoading(),
    userInfo: selectUserInfo(),
    userInfoErrorStatus: selectUserErrorStatus(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin(phoneNumber, password) {
            dispatch(login(phoneNumber, password));
        },
        doRegister(phoneNumber, fullName, password) {
            dispatch(register(phoneNumber, fullName, password));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter (Authorization));