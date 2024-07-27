// controllers/userController.js

// Example controller handling user-related operations

// Sample data (can be replaced with database operations)
const jwt=require('jsonwebtoken')

const user = require('../models/usermodel')
let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

// Controller functions
exports.getUsers = (req, res) => {
    res.json(users);
};

exports.getUserById = (req, res) => {

    user.findOne({email:req.body.email,password:req.body.password}).then((docs) => {

        if (docs) {
            console.log(docs)
            var t=process.env.jwt

            const token = jwt.sign({ user: docs },t , { expiresIn: '24h' });

            
            res.status(200).json({ message: token });
        }

        else {


            res.status(200).json({ message: '500' });

        }
    });
};
exports.verifyUser = (req, res) => {

    var t=process.env.jwt

    jwt.verify(req.body.token, t, (err, decoded) => {
        if (err) {
            console.error('Token verification failed:', err);
            res.status(200).json({ message: 'Expired' });
        }
    
        // Extract docs data from the decoded payload
        const docs = decoded.user;
        
        res.status(200).json({ message: docs });
    });
  
};
exports.login2 = (req, res) => {
    console.log(req.body)
   

    user.findOne({email:req.body.email,password:req.body.password}).then((docs) => {

        if (docs) {
            console.log(docs)
          
    
            res.status(200).json({ message: docs });
        }

        else {


            res.status(200).json({ message: '500' });

        }
    });
};
exports.deleteById = (req, res) => {

    user.deleteMany({_id:{$in:req.body.deleteids} }).then((docs) => {

        if (docs) {
         res.status(200).json({ message: 'deleted' });
        }

        else {


            res.status(200).json({ message: '500' });

        }
    });
};

exports.updateLeads = (req, res) => {

    var month=new Date().getMonth()
    var year=new Date().getFullYear()

    var day=new Date().getDate()
    const newLead = { leads: req.body.count, date:`${month}/${day}/${year}`  };
    user.updateOne(    { _id: req.body._id},
        { $push: { leadsCount:  newLead}}).then((docs) => {

        if (docs) {

            res.json(docs);
        }

        else {

            console.log(err)
            res.status(404).json({ message: 'User not found' });

        }
    });

};

exports.getAllUsers = (req, res) => {

    user.find({}).then((docs) => {

        if (docs) {

            res.json(docs);
        }

        else {

            console.log(err)
            res.status(404).json({ message: 'User not found' });

        }
    });

    
};
exports.update = async (req, res) => {
    try {
        // Find user by email and password
        const user = await user.findOne({ email: req.body._id });

        if (user) {
            // Update the user's last login time or any other field
            user.status = req.body.status; // Example field, adjust as needed
            await user.save(); // Save the updated user document

            // Respond with the updated user data
            res.json(user);
        } else {
            // User not found
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        // Handle errors
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.login = (req, res) => {

    user.findOne({ email: req.body.email,password:req.body.password }).then((docs) => {

        if (docs) {

            res.json(docs);
        }

        else {

            console.log(err)
            res.status(404).json({ message: 'User not found' });

        }
    });

};


exports.createUser = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;




    try {
        const newUser = new user({ username, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { name } = req.body;
    let userUpdated = false;

    users = users.map(user => {
        if (user.id === userId) {
            user.name = name;
            userUpdated = true;
        }
        return user;
    });

    if (!userUpdated) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User updated successfully' });
};

exports.deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const initialLength = users.length;

    users = users.filter(user => user.id !== userId);

    if (users.length === initialLength) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
};
