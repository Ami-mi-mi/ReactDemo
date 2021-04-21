import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {authController} from '@Utils/authController';
const PrivateRoute = ({component:Component,...rest})=>{
    return (
        <Route
            {...rest}
            render = {props => (authController.getToken())?(<Component {...props}/>):(
                <Redirect to={{
                    pathname:"/login",
                    state:{from:props.location}
                }}/>
            )}
        ></Route>
    )
}
export default PrivateRoute;