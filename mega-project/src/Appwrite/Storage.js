import conf from '../Conf/conf.js';
import {Id,Clinte,Storage,Databases,Query} from 'appwrite';

class Service{
  clinte=new Clinte();
  database
  bucket
  
  constructor(){
this.clinte 
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.database=Databases(this.clinte);
    this.bucket=Storage(this.clinte);
  }
  async createPost({title,slug,content,image,status,userId}){
    try{
    await this.database.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      {title,content,image,status,userId}
      }
      );
      }catch(e){
        throw e;
      }
    }
  }
    async updatePost(slug{title,content,image,status,userId}){
      try{
      return await this.database.updateDocument(conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      slug,
      {title,content,status})
      }catch(e){
        throw e;
      }
    }
    async deletePost(slug){
      try{
        await this.database.deleteDocument(conf.appwriteDatabaseId,
           conf.appwriteCollectionId,
           slug
        )
        return true;
      }catch(e){
        throw e;
        return false;
      }
    }
    async getPost(slug){
      try{
      return await .this.database.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug)
      }catch(e){
        throw e;
      }
    }
    async getPosts(queries = [Query.equal("status","active")]){
      try{
      return await this.database.listDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      queries
      )
      }catch(e){
        throw e;
      }
    }
    
    // File function
    async uploadFile(file){
      try{
        await this.bucket.createFile(
          conf.appwriteconf.appwriteBucketid,
          ID.unique(),
          file
          )
          return true
      }catch(e){
        throw e;
        return false;
      }
    }
}

comst service= new Service();
export default service;