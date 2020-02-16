import React from 'react';
import PropTypes from 'prop-types';
import { Button, Spin } from 'antd';

import './style.css';

function OrangeButton({
    text,
    onClick,
    htmlType,
    fullWidth,
    isLoading
}) {

    return (
        <Spin spinning={isLoading}>
            <Button className={`orange-button ${fullWidth ? "full-width" : ""}`} htmlType={htmlType} onClick={onClick}>
                {text}
            </Button>
        </Spin>
    )
}

OrangeButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    htmlType: PropTypes.string,
    fullWidth: PropTypes.bool,
    isLoading: PropTypes.bool.isRequired,
}

OrangeButton.defaultProps = {
    text: "",
    fullWidth: false,
    isLoading: false,
}

export default OrangeButton;