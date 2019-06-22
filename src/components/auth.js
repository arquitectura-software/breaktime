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
        this.authenticatedAdmin = true;
        cb();
    }

    logout(cb){
        this.authenticated = false;
        cb();
    }

    logoutAdmin(cb){
        this.authenticatedAdmin = false;
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }

    isAuthenticatedAdmin(){
        return this.authenticatedAdmin;
    }

}

export default new Auth()