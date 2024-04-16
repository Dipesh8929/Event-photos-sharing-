const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    },
    dateOfBirth: {
        type: String,
    },
    about: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        // required:true,
        trim: true
    },
    address: {
        type: String,
        // required:true,
        trim: true
    },
    postalCost: {
        type: Number,
        // required:true,
        trim: true
    },
    panUrl: {
        type: String,
        // required:true,
        default: ""
    },
    aadharUrl: {
        type: String,
        // required:true,
        default: ""
    },
    verification: {
        type: String,
        // required:true,
        default: "N"
    },
});

module.exports = mongoose.model("Profile", profileSchema);