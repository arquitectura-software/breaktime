import {URLGRAPH} from '../constants'

class Auth {
    constructor(){
        this.authenticated = false;
        this.authenticatedAdmin = false;
    }

    login(cb){
        this.authenticated = true;
        cb();
    }

    loginAdmin(cb){
        window.localStorage.removeItem("token");
        this.authenticatedAdmin = true;
        cb();
    }

    logout(cb){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("idUser");
        window.localStorage.removeItem("user");
        this.authenticated = false;
        cb();
    }

    logoutAdmin(cb){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        this.authenticatedAdmin = false;
        cb();
    }

    isAuthenticated(){
        console.log(window.localStorage.getItem("token"))
        let tok = window.localStorage.getItem("token")

        const axios = require("axios")

        axios.post(URLGRAPH, {
        query : `mutation{
            validate(credentials: {
                token:"${tok}"
            }){
                message
            }
        }`
        }).then((result) => {
            let jwt = result.data.data.validate
            console.log(jwt)      
            
            if(jwt.message === "Token Valido"){
                /*this.login(props, () => {
                    this.props.history.push("/events")
                })*/
                return this.authenticated;
            }else{
                this.logout(() => {
                    alert("Su sesión ha expirado. Por favor vuelva a iniciar sesión.")
                    this.props.history.push("/")
                  })
                return this.authenticated;
            }
        })
        .catch(err => console.log(err))
    }

    isAuthenticatedAdmin(){
        if(window.localStorage.getItem("token").length > 1){ //TODO ISVALID
            return true;
        } 
        return this.authenticatedAdmin;
    }
}

export default new Auth()