import React, { useState } from 'react';
import {Layout, Menu, Icon} from 'antd';
import PropTypes from 'prop-types';
import { mapMenuKeyToUrlParam } from '../../constants/AppUtils';
import { withRouter } from 'react-router';
const {Sider} = Layout;

function CustomSider({
    collapsed,
    handleCollapse,
    config,
    history
}) {

    const [state, setState] = useState({
        menuKey: '1'
    });

    const onCollapse = () => {
        handleCollapse(!collapsed);
    }

    const listMenu = config.map((menu) => {
        return (
            <Menu.Item key={menu.key}>
                <Icon type={menu.iconType}/>
                <span>{menu.title}</span>
            </Menu.Item>
        )
    });

    const navToNewPage = (key) => {
        setState({
            menuKey: key,
        });
        const urlParam = mapMenuKeyToUrlParam(+key);
        history.push(urlParam);
    }

    return (
        <Sider
            style={{
            background: '#fff'
        }}
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}>
            <Menu theme="light" onClick={(e)=>navToNewPage(e.key)} mode="inline" selectedKeys={[`${state.menuKey}`]} >
                {listMenu}
            </Menu>
        </Sider>
    )
}

CustomSider.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    handleCollapse: PropTypes.func.isRequired,
    config: PropTypes.array.isRequired
}

CustomSider.defaultProps = {
    collapsed: false,
    config: Array.from([])
}

export default withRouter(CustomSider);