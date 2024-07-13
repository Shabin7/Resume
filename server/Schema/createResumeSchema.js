const mongoose = require('mongoose')

const createResumeSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    degree: String,
    institution: String,
    gpa: Number,
})

module.exports= mongoose.model('resume', createResumeSchema)