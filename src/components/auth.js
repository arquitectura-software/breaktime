import {URLGRAPH} from '../constants'

class Auth {
    constructor(){
        this.authenticated = true;
        this.authenticatedAdmin = true;
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
        return this.authenticatedAdmin;
    }

    isAuthenticatedAdmin(){
        return this.authenticatedAdmin;
    }
}

export default new Auth()