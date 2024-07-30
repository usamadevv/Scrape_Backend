

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Form = new Schema({
   
   
    name: {
        type: String,
        
    }
    ,
    
    elements:Array,
 
    status:{
        type:String,
    },
    formsteps:Array,
    userid:{
        type:String
    }
    ,
 
    
});






const form = mongoose.model('Form', Form);
module.exports =form
  
