import config from '../config/config.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account 

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email,password})

            } else {
                return userAccount; 
            }
        } catch (error) {
            console.log("Appwrite Service :: CreateAccount ::", error);

        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email,password)       
        } catch (error) {
            console.log("Appwrite Service :: Login ::", error);
        }
    }
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: GetCurrentUser ::", error);
            
        }
        return null;
    }
    async logOut() {
        try {
            await this.account.deleteSession()
        } catch (error) {
            console.log("Logout Error :: ", error)
        }
    }
}

const authService = new AuthService();


export default authService;