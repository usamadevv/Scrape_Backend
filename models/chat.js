

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Chat = new Schema({
   
   
    msg: {
        type: String,
        
    }
    ,
    
    recieverid:{
        type:String,
    },
    senderid:{
        type:String,
    },
    reciever:{
        type:String,
    },
    sender:{
        type:String
    }
    ,
    time:{
        type:String
    },
    date:{
        type:String
    },
    seen: {
        type: String
    },

    hidepart: {
        type: Array
    },
    
});






const Chatmodel = mongoose.model('Chat', Chat);
module.exports =Chatmodel
  
