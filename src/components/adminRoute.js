import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './auth'

export const AdminRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} 
            render={(props) => {
                if(auth.isAuthenticatedAdmin()){
                    return <Component {...props}/>
                }else{
                    console.log("asdflj")
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