
const formRsponse = require('../models/formResponse')

exports.createformRsponse = async (req, res) => {
  



    try {
        const newformRsponse = new formRsponse(req.body);
        await newformRsponse.save();
        res.status(201).json(newformRsponse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};



exports.getformRsponsebyid = (req, res) => {

    formRsponse.find(
        { formid: req.body.id }
   ).then((docs) => {

        if (docs) {

            res.json(docs);
        }

        else {

            console.log(err)
            res.status(404).json({ message: 'formRsponse not found' });

        }
    });

};
