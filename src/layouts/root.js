import React from "react";
import { Provider } from "react-redux";
import Messages from "./Messages";
import LoginLayout from "./authentication/Login";
import "antd/dist/antd.css";
import {connect } from "react-redux";

const mapStateToProps = ownProps => {
    return {
        ...ownProps
    }
}
class Root extends React.Component {
    render() {
        return (
        <Provider store={this.props.store}>
        {this.props.authentication.isLoggedIn ?(
         <Messages /> 
         ): (
         <LoginLayout />)}
        </Provider>
        )
    }
}
export default connect(mapStateToProps)(Root)
