import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import BackgroundImage from './BackgroundImage';
import Content from './Content';
import OrangePaneCover from '../OrangePaneCover';

const H3 = styled.h3`
    color: white;
    font-weight: 700;
`;

const P = styled.p`
    font-size: 1.2rem;
    width: 300px;
    display: inline-block;
`;

function LeftPaneAuth({
    title,
    subTitle
}){
    return(
        <Wrapper>
            <BackgroundImage />
            <OrangePaneCover />
            <setion className="container-fluid">
                <Content className="row align-items-center">
                    <section className="col-12">
                        <H3>{title}</H3>
                        <P>{subTitle}</P>
                    </section>
                </Content>
            </setion>
        </Wrapper>
    )
}

LeftPaneAuth.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string
};

export default LeftPaneAuth;