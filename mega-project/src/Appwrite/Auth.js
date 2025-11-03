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
  async createAccount ({ID.unique,email,password,name}){
    try{
      const userAccount=this.account.create(ID.unique,email,password);
    }catch(e){
      throw e;
    }
  }
}

const authservice= new Authservice();
export default Authservice