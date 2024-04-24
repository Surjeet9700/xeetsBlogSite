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
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
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


