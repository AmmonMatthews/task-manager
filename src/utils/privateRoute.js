import React from "react";
import cookie from "js-cookie";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (cookie.get("token")) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />
    );
};

export default PrivateRoute;