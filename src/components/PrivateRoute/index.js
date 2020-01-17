import React, { memo } from 'react';
import { Route, Redirect } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { makeUserInfoSelector } from '../../containers/App/selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';

function PrivateRoute({
    children,
    userInfo, 
    ...rest
}) {
    console.log(userInfo);
    return(
        <Route 
            {...rest}
            render={(location)=>{
                userInfo != undefined ? (
                    children
                ) : (
                    <Redirect 
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }}
        />
    );
}

const mapStateToProps = createStructuredSelector({
    userInfo: makeUserInfoSelector()
})

const withConnect = connect(
    mapStateToProps,
    null
);

export default compose(
    withConnect,
    memo
)(PrivateRoute);