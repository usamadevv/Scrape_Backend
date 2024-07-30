
const chats = require('../models/chat')

exports.createChat = async (req, res) => {
  



    try {
        const newchats = new chats(req.body);
        await newchats.save();
        res.status(201).json(newchats);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



exports.getchatbyid = (req, res) => {

    chats.find({  $or: [
        { senderid: req.body.id },
        { recieverid: req.body.id }
    ]}).then((docs) => {

        if (docs) {

            res.json(docs);
        }

        else {

            console.log(err)
            res.status(404).json({ message: 'chats not found' });

        }
    });

};