import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { getUserAllowed } from './selector';
import { connect } from "react-redux";

const PrivateRoute = (props) => {
    //const condition = performValidationHere();  write some login with state management to check is user loged in or not
    const condition = props.logingInUser ? true : false;
    console.log("condition",condition)
    console.log("condition",props)

    return condition ? (<Route path={props.path} exact={props.exact} component={props.component} />) :
        (<Redirect to="/" />)

};

PrivateRoute.propTypes = {
};

const mapStateToProps = state => ({
    logingInUser: state.todos.isUserLoggedIn
});
const mapDispatchToProp = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProp)(PrivateRoute);