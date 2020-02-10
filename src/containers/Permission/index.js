import React from 'react';
import SideNav from '../../components/SideNav';
import Helmet from 'react-helmet';
import Wrapper from './Wrapper';
import Header from '../../components/Header';
import WidgetTable from './WidgetTable';

function Permission ({

}) {
    return(
        <React.Fragment>
            <Helmet>
                <title>Phân quyền bệnh viện</title>
            </Helmet>
            <Header />
            
            <Wrapper>
                <SideNav>
                    <WidgetTable />
                </SideNav>
            </Wrapper>
        </React.Fragment>
    )
}
export default Permission;