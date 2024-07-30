
const form = require('../models/form')

exports.createForm = async (req, res) => {
  



    try {
        const newform = new form(req.body);
        await newform.save();
        res.status(201).json(newform);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



exports.getformbyid = (req, res) => {

    form.find({  $or: [
        { senderid: req.body.id },
        { recieverid: req.body.id }
    ]}).then((docs) => {

        if (docs) {

            res.json(docs);
        }

        else {

            console.log(err)
            res.status(404).json({ message: 'form not found' });

        }
    });

};
exports.getformbyid = (req, res) => {

    form.find({}).then((docs) => {

        if (docs) {

            res.json(docs);
        }

        else {

            console.log(err)
            res.status(404).json({ message: 'form not found' });

        }
    });

};
exports.getform = (req, res) => {

    form.findOne({_id:req.body._id}).then((docs) => {

        if (docs) {

            res.json(docs);
        }

        else {

            console.log(err)
            res.status(404).json({ message: 'form not found' });

        }
    });

};