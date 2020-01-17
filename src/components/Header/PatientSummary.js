import React from 'react';
import { Media } from 'react-bootstrap';
import {Input} from 'antd';
import { DEFAULT_AVATAR } from '../../images/static';
import styled from 'styled-components';

const {Search} = Input;

const Img = styled.img `
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

function PatientSummary() {
    return (
        <section className="container-fluid">
            <section className="row">
                <section className="col-12 col-md-6 col-lg-4">
                    <Media>
                        <Img 
                            className="mr-3 align-self-center"
                            src={DEFAULT_AVATAR}
                            alt="default"
                        />

                        <Media.Body className="pt-3">
                            <p><b>Ngày sinh:</b> 05/10/1997 - 22 tuổi</p>
                            <p><b>Giới tính:</b> Nam</p>
                        </Media.Body>
                    </Media>
                </section>

                <section className="col-12 col-md-6 col-lg-4 pt-3">
                    <p><b>Số điện thoại:</b> 0783550324</p>
                    <p><b>Địa chỉ:</b> Lê Thánh Tôn - Quận 1</p>
                </section>

                <section className="col-12 col-md-12 col-lg-4 pt-3">
                <Search
                    placeholder="Nhập từ khóa"
                    enterButton="Tìm kiếm"
                    onSearch={value => console.log(value)}
                />
                </section>
            </section>
        </section>
    );
}

export default PatientSummary;