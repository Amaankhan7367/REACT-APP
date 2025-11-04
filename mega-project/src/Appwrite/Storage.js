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
    await this.database.createDocument(
      conf.appwriteDatabaseId;
      conf.appwriteCollectionId
      )
  }
}

comst service= new Service();
export default service;