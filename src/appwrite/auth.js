import config from "../config/config.js";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
           .setEndpoint(config.appwriteUrl)
           .setProject(config.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
           const userAccount =  await this.account.create(ID.unique(), email, password, name)
           if (userAccount) {
                // call the another method
                return this.login({email, password})
           }else{
                return userAccount;
           }
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}) {
        try {
           return await this.account.createEmailPasswordSession(email, password)
            
        } catch (error) {
            throw error;
        }

    }

    async isLoggedIn() {
        try {
          const user = await this.getCurrentUser();
          return user !== null;
        } catch (error) {
          console.error("AuthService :: isLoggedIn :: error", error);
          return false;
        }
      }
    
    async getCurrentUser() {
        try {
            const session = await this.account.getSession('current'); // Get the current session
            if (session) {
                return await this.account.get(); // Get the current user's account information
            } else {
                throw new Error('User is not logged in or session has expired.');
            }
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error", error);
            // Handle the error, e.g., prompt the user to log in
            return null;
        }
    }
    
    async logout(){
        try {
            await this.account.deleteSessions()
            
        } catch (error) {
            console.log("appwrite service :: logout :: error", error)
            
        }
    }
}



const authservice = new AuthService();


export default authservice;


