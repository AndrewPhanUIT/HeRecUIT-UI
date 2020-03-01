import React from 'react';
import SideNav from '../../components/SideNav';
import Helmet from 'react-helmet';
import Wrapper from './Wrapper';
import Header from '../../components/Header';
import WidgetTable from './WidgetTable';
import { Component } from 'react';
import { selectPermission, selectPermissionLoading, selectError, selectLoadingAddPermission } from '../App/selectors';
import { createStructuredSelector } from 'reselect';
import { queryPermission, addPermission, clearErrorMess } from '../App/actions';
import { connect } from 'react-redux';
import { USER_INFO } from '../../constants/constants';
import { isEmpty } from 'lodash';
import { message } from 'antd';

class Permission extends Component{

    componentDidMount() {
       this.initListPermissions();
    }

    componentDidUpdate(prevProps, prevState) {
        const { error, clearErrorMess, loadingAddPermission } = this.props;
        const { loadingAddPermission: prevLoadingAddPermission} = prevProps;

        if (!isEmpty(error)) {
            message.error(error);
            clearErrorMess();
        }
        if (isEmpty(error) && prevLoadingAddPermission && !loadingAddPermission) {
            message.info('Phân quyền thành công!')
            this.initListPermissions();
        }
    }

    initListPermissions = () => {
        const { queryPermission } = this.props;
        const userInfo = JSON.parse(sessionStorage.getItem(USER_INFO));
        queryPermission(userInfo.phoneNumber);
    }

    render() {
        const { permisions, permissionsLoading } = this.props;
        return(
            <React.Fragment>
                <Helmet>
                    <title>Phân quyền bệnh viện</title>
                </Helmet>
                <Header />
                
                <Wrapper>
                    <SideNav>
                        <WidgetTable isLoading={permissionsLoading} data={permisions} {...this.props} />
                    </SideNav>
                </Wrapper>
            </React.Fragment>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    permisions: selectPermission(),
    permissionsLoading: selectPermissionLoading(),
    error: selectError(), 
    loadingAddPermission: selectLoadingAddPermission(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        queryPermission(phoneNumber) {
            dispatch(queryPermission(phoneNumber));
        },
        addPermission(orgHyperledgerName,  phoneNumber) {
            dispatch(addPermission(orgHyperledgerName,  phoneNumber));
        },
        clearErrorMess() {
            dispatch(clearErrorMess());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Permission);