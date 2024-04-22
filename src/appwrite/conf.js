import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client  = new Client();
    databases;
    bucket;

    constructor(){
        this.client
           .setEndpoint(config.appwriteUrl)
           .setProject(config.appwriteProjectId)
           this.databases = new Databases(this.client)
           this.bucket = new Storage(this.client)
    }

    async createPost ({title, slug, content, featuredImage, status, userId}){
        try {
             return await this.databases.createDocument(
                 config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
             )
            
        } catch (error) {
            console.log("appwrite service :: createPost :: error", error)

        }
    }

    async updatePost (slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
            
        } catch (error) {
            console.log("appwrite service :: updatePost :: error", error)

        }
    }

    async deletepost(slug){
        console.log(slug);
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("appwrite service :: deletepost :: error", error)
            return false
            
        }
    }


    async getPost (slug) {
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("appwrite service :: getPost :: error", error)
            return false

        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
             

            )
        } catch (error) {
            console.log("appwrite service :: getPosts :: error", error)
            return false

        }
    }

    //files upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
            return true
            
        } catch (error) {
            console.log("appwrite service :: uploadFile :: error", error)
            return false
        }
    }

    async deleteFile(fileID){
        try {
            return await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileID
            )
            return true
            
        } catch (error) {
            console.log("appwrite service :: deleteFile :: error", error)
            return false
    
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileID,
        )
    }

}





const service = new Service()
export default service;
