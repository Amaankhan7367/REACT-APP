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
      const await userAccount=this.account.create({ID.unique,email,password});
      if(userAccount){
        //call login function
        login({email,password});
      }
      else{
        return userAccount;
      }
    }catch(e){
      throw e;
    }
    async login ({email,password}){
      try{
        return await this.account.createEmailPasswordSession({email,password})
      }catch(e){
        throw e;
      }
    }
    async getCurrentUser(){
      try{
      return this.account.get();
      }catch(e){
        throw e;
      }
    }
    async logout(){
      try{
        return this.account.delete.sessions();
      }catch(e){
        throw e;
      }
    }
  }
}

const authservice= new Authservice();
export default Authservice