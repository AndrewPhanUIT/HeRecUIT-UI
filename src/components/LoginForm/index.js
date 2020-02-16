import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { REGEX } from '../../containers/App/constants';
import OrangeButton from '../OrangeButton';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const LinkWrapper = styled.section`
    text-align: center;
`;

function LoginForm({
    form,
    loginRequest,
    isLoading,
}){

    const submitLoginForm = (e) => {
        e.preventDefault();
        form.validateFields((err, value)=>{
            if(!err){
                loginRequest(value.usernameOrPhoneNumber, value.password);
            }
        });
    }

    const {getFieldDecorator} = form;

    return(
        <Form onSubmit={submitLoginForm}>
            <Form.Item>
                {getFieldDecorator('usernameOrPhoneNumber', {
                    rules: [
                        {
                            required: true,
                            message: 'Vui lòng nhập số điện thoại hoặc Tên đăng nhập!'
                        }
                    ]
                })(
                    <Input placeholder="Số điện thoại hoặc Tên đăng nhập"/>,)}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu'
                        },{
                            pattern: REGEX.password,
                            message: 'Mật khẩu bao gồm 1 ký tự hoa, 1 ký tự thường và 1 số'
                        }
                    ]
                })(
                    <Input type='password' placeholder="Mật khẩu (từ 5 đến 20 ký tự)"/>,)}
            </Form.Item>

            <Form.Item>
                <OrangeButton fullWidth={true} onClick={()=>{}} htmlType="submit" text="ĐĂNG NHẬP" isLoading={isLoading} />
                
                <LinkWrapper>
                    <Link href="/reset-password">Quên mật khẩu</Link>
                </LinkWrapper>
            </Form.Item>

        </Form>
    )
}

LoginForm.propTypes = {
    form: PropTypes.object,
    handleSubmit: PropTypes.func,
    isLoading: PropTypes.bool.isRequired,
};

LoginForm.defaultProps = {
    isLoading: false,
}

const LoginFormWrapper = Form.create({name: 'login-form'})(LoginForm);
export default LoginFormWrapper;