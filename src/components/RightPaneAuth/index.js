import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './styles.scss';
import If from '../If';
import LoginFormWrapper from '../LoginForm';
import Wrapper from './Wrapper';

const WrapperBody = styled.section`
     margin-top: 30px;
`;

function RightPaneAuth({
    type
}){
    return (
        <Wrapper>
            <section id='login-register-form-nav'>
                <Link
                    className={
                        type === 'login' ? 'underline-orange': ''
                    }
                    to="/login">
                        Đăng nhập
                </Link>

                <Link
                    className={
                        type === 'register' ? 'underline-orange' : ''
                    }
                    to='/register'>
                        Đăng ký
                </Link>
            </section>

           <WrapperBody>
               <If condition={type === 'login'}>
                    <LoginFormWrapper />
               </If>

               <If condition={type === 'register'}>
                    
               </If>
           </WrapperBody>

        </Wrapper>
    )
}

RightPaneAuth.propTypes = {
    type: PropTypes.string.isRequired
}

RightPaneAuth.defaultTypes = {
    type: 'login'
}

export default RightPaneAuth;