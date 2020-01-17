import React from 'react';
import { Media } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p `
    line-height: 1.5;
    color: black;
`;

const H6 = styled.h6 `
    font-weight: bold;
    font-size: 16px;
`;

function CustomMedia({
    src,
    alt

}) {
    return (
        <Media className='py-2'>
            <img 
                src={src}
                width={25}
                height={25}
                alt={alt}
                className="align-self-center"
            />

            <Media.Body className='ml-3'>
                <H6>Vacxin</H6>
                <P className="py-0 mb-0">50-100g</P>
                <P className="py-0 mb-0"><b>Người lập: </b>Bs. Nguyễn Văn A</P>
                <P className="py-0 mb-0"><b>Ngày tạo: </b>20/11/2019</P>
            </Media.Body>
        </Media>
    )
}

CustomMedia.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

CustomMedia.defaultProps = {
    alt: "This is alt",
    src: ""
}



export default CustomMedia;