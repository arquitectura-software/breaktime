import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './auth'

export const ProtectedRouteAdmin = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} 
            render={(props) => {
                auth.checkToken();
                if(auth.isAuthenticatedAdmin()){
                    return <Component {...props}/>
                }else{
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                        
                    }/>
                }
            }
        }/>
    )
}