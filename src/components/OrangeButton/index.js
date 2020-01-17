import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import './style.css';

function OrangeButton({
    text,
    onClick,
    htmlType,
    fullWidth
}) {
    return (
        <Button className={`orange-button ${fullWidth ? "full-width" : ""}`} htmlType={htmlType} onClick={onClick}>
            {text}
        </Button>
    )
}

OrangeButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    htmlType: PropTypes.string,
    fullWidth: PropTypes.bool
}

OrangeButton.defaultTypes = {
    text: "",
    fullWidth: false
}

export default OrangeButton;