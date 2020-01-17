import React from 'react';
import {Media} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OrangeButton from '../OrangeButton';
import Wrapper from './Wrapper';

import './style.css';

const H5 = styled.h5 `
    font-weight: bold;
    font-size: 1.25rem;
`;

const P = styled.p `
    font-size: 1rem;
`;

class Summary extends React.Component {

    constructor(props){
        super(props);
        this.createOtherInfo = this.createOtherInfo.bind(this);
    }

    createOtherInfo(){
        const {data} = this.props;
        if(!data) return <P></P>;
        
        let lst = [];
        let i = 1;
        Object.keys(data).forEach(key => {
            if(key !== 'src' && key !== 'title' &&  key !== 'createdAt' ){
                lst.push(
                    <P key={i}>
                        <b>{data[key].title}</b>
                        {data[key].text}
                    </P>
                );
                i++;
            }
        })

        return <React.Fragment>
            {lst}
        </React.Fragment>;    
    }

    render(){
        const {data} = this.props;
        
        return (
            <Wrapper className="container-fluid">
                <section className="row">
                    <section className="col-12 col-md-8">
                        <Media>
                            <img
                                width={50}
                                height={50}
                                src={data.src}
                                alt={data.src}
                                className="mr-5 align-self-center"/>
    
                            <Media.Body>
                                <H5>{data.title}</H5>
    
                                {/* <P>
                                    <b>Địa điểm: </b>
                                    Bệnh viện Thủ Đức, khoa tai mũi họng</P>
                                <P>
                                    <b>Bác sĩ: </b>
                                    Phan Thế Anh</P> */}
                                    {this.createOtherInfo()}
                            </Media.Body>
                        </Media>
                    </section>
    
                    <section className="col-12 col-md-4 text-right">
                        <P>
                            <b>Ngày tạo: </b>
                            {data.createdAt}</P>
                        <OrangeButton text="Chi tiết"/>
                    </section>
                </section>
            </Wrapper>
        )
    }
}

Summary.propTypes = {
    data: PropTypes.object.isRequired
}

Summary.defaultProps = {
    data: {}
}

export default Summary;