import conf from '../Conf/conf.js';
import {Id,clinte,account} from 'appwrite';

export class Authservice{
  clinte =new clinte();
  account;
  
  constructor(){
    this.clinte 
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
  }
}

const authservice= new Authservice();
export default Authservice