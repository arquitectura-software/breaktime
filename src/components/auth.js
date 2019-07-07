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
        if(window.localStorage.getItem("token").length > 1){ //TODO ISVALID
            return true;
        } 
        return this.authenticated;
    }

    isAuthenticatedAdmin(){
        if(window.localStorage.getItem("token").length > 1){ //TODO ISVALID
            return true;
        } 
        return this.authenticatedAdmin;
    }
}

export default new Auth()