import conf from '../Conf/conf.js';
import {Id,Clinte,Storage,Databases,Query} from 'appwrite';

class Service{
  clinte=new Clinte();
  database
  bucket;
  
this.clinte 
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.Database(this.clinte)
}
comst service= new Service();
export default service;