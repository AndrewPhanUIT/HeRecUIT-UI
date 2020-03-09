import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import PropTypes from 'prop-types';
import { mapMenuKeyToUrlParam } from '../../constants/AppUtils';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectMenuIndex } from '../../containers/App/selectors';
import { changeMenu } from '../../containers/App/actions';
import { connect } from 'react-redux';

const { Sider } = Layout;


function CustomSider({
    collapsed,
    handleCollapse,
    config,
    history,
    menuIndex,
    changeMenu,
}) {

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
        changeMenu(key);
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
            <Menu theme="light" onClick={(e)=>navToNewPage(e.key)} mode="inline" selectedKeys={[`${menuIndex}`]} >
                {listMenu}
            </Menu>
        </Sider>
    )
}

CustomSider.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    handleCollapse: PropTypes.func.isRequired,
    config: PropTypes.array.isRequired,
    menuIndex: PropTypes.number,
}

CustomSider.defaultProps = {
    collapsed: false,
    config: Array.from([]),
    menuIndex: 1,
}

const mapStateToProps = createStructuredSelector({
    menuIndex: selectMenuIndex(),
});

const mapDispatchToProps = dispatch => {
    return {
        changeMenu(index) {
            dispatch(changeMenu(index));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CustomSider));