
const leads = require('../models/leads')

exports.createleads = async (req, res) => {
    const leadsArray = req.body;  // Expecting an array of leads in the request body
console.log(leadsArray)
    if (!Array.isArray(leadsArray) || leadsArray.length === 0) {
        return res.status(400).json({ message: "Invalid input. Expected an array of leads." });
    }

    try {
        // Create an array of lead documents to be saved
        const leadDocs = leadsArray.map(lead => {
            return {
                createdby: lead.createdby,
                createdbyname: lead.createdbyname,
                email: lead.email,
                title: lead.title,
                phone: lead.phone,
                link: lead.link,
                bdy: lead.bdy,
                street: lead.street,
                category: lead.category,
                state: lead.state,
                town: lead.town,
                keyword: lead.keyword

            };
        });

        // Save all lead documents in bulk
        const savedLeads = await leads.insertMany(leadDocs);

        res.status(200).json(savedLeads);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.update = async (req, res) => {
    try {
        // Find user by email and password
        const leadsq = await leads.findOne({ _id: req.body._id });

        if (leadsq) {
            // Update the leads's last login time or any other field
            leadsq.status = req.body.status; // Example field, adjust as needed
            await leadsq.save(); // Save the updated leads document

            // Respond with the updated leads data
            res.json(leadsq);
        } else {
            // leads not found
            res.status(404).json({ message: 'leads not found' });
        }
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.getall = async(req, res) => {

    const skip = (req.body.page) * 500;

    const docs = await leads.find({})
    .skip(skip)
    .limit(500)
    .exec()
    .then((docs) => {

        if (docs) {

            console.log(docs)
            res.json(docs);
        }

        else {

            console.log(err)
            res.status(404).json({ message: 'User not found' });

        }
    });

};
exports.getcount = (req, res) => {
    console.log('hy')
    const totalCount =  leads.countDocuments({}).then((docs)=>{
        console.log(docs)

        res.json({ message:  docs});
    });

  

};