

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FormResponse = new Schema({
   
   
    
    answers:Array,
    formid:{
        type:String
    }
    ,
    createdAt: { type: Date, default: Date.now }

 
    
});






const formres = mongoose.model('FormResponse', FormResponse);
module.exports =formres
  
