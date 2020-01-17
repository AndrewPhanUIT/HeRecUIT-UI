import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span `
    background-color: #3DABD0;
    color: white;
    padding: 10px 20px;
    margin-bottom: 10px;
`;

function TitleRectangle({
    text
}) {
    return <Span>{text}</Span>
}

TitleRectangle.propTypes = {
    text: PropTypes.string.isRequired
}

TitleRectangle.defaultProps = {
    text: 'Tiêu đề'
}


export default TitleRectangle;