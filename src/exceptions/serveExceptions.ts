export default class serverException extends Error {
    status:number
   
    constructor(message) {
      super(message);
  

      this.name = this.constructor.name;
  
      
      Error.captureStackTrace(this, this.constructor);
      this.status = 500;
    }
  };