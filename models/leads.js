// models/User.js

const mongoose = require('mongoose');

// Define User schema
const leadsSchema = new mongoose.Schema({
  createdby: { type: String },
  createdbyname: { type: String },
  email: { type: String, },
  title: { type: String},
  phone: { type: String, },
  link: { type: String},
  bdy: { type: String},
  street: { type: String},
  category: { type: String},
  state: { type: String},
  status: { type: String},
  town: { type: String},
  keyword: { type: String},
  createdAt: { type: Date, default: Date.now }
});

// Create User model
const Leads = mongoose.model('Leads', leadsSchema);

module.exports = Leads;