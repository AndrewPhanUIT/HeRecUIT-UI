import React from 'react';
import SideNav from '../../components/SideNav';
import Helmet from 'react-helmet';
import Wrapper from './Wrapper';
import Header from '../../components/Header';
import WidgetTable from './WidgetTable';
import { Component } from 'react';
import { selectPermission, selectPermissionLoading } from '../App/selectors';
import { createStructuredSelector } from 'reselect';
import { queryPermission } from '../App/actions';
import { connect } from 'react-redux';
import { USER_INFO } from '../../constants/constants';

class Permission extends Component{

    componentDidMount() {
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
                        <WidgetTable isLoading={permissionsLoading} data={permisions} />
                    </SideNav>
                </Wrapper>
            </React.Fragment>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    permisions: selectPermission(),
    permissionsLoading: selectPermissionLoading(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        queryPermission(phoneNumber) {
            dispatch(queryPermission(phoneNumber));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Permission);