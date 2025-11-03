import conf from '../Conf/conf.js';
import {Id,Clinte,Account} from 'appwrite';

export class Authservice{
  clinte =new Clinte();
  account;
  
  constructor(){
    this.clinte 
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId)
    this.account = new Account(this.clinte);
  }
  async createAccount (){
    const userAccount= 
  }
}

const authservice= new Authservice();
export default Authservice