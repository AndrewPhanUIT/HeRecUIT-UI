import React from 'react';
import {Media} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OrangeButton from '../OrangeButton';
import Wrapper from './Wrapper';

import './style.css';
import { selectItem } from '../../containers/App/actions';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

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
            if(key !== 'src' && key !== 'title' &&  key !== 'createdAt' && key !== 'isExpired' && key !== 'type') {
                lst.push(
                    <P key={i}>
                        <b>{data[key].title}</b>
                        {data[key].text ? data[key].text.split('#').join(' ') : ''}
                    </P>
                );
                i++;
            }
        })

        return <React.Fragment>
            {lst}
        </React.Fragment>;    
    }

    handleSelectItem = (type, key) => {
        const { selectItem } = this.props;
        selectItem(type, key);
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
                                {this.createOtherInfo()}
                            </Media.Body>
                        </Media>
                    </section>
    
                    <section className="col-12 col-md-4 text-right">
                        <P>
                            <b>Ngày tạo: </b>
                            {data.createdAt}</P>
                        <OrangeButton text="Chi tiết" onClick={()=>this.handleSelectItem(data.type, data.key)} />
                        {
                            data.isExpired && (
                                data.isExpired ? (
                                    <div><br/><b>Đã hết hạn</b></div>
                                ) : <span></span>
                            )
                        }
                    </section>
                </section>
            </Wrapper>
        )
    }
}

Summary.propTypes = {
    data: PropTypes.object.isRequired,
    selectItem: PropTypes.func,
}

Summary.defaultProps = {
    data: {}
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = dispatch => {
    return {
        selectItem(type, key) {
            dispatch(selectItem(type, key));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);