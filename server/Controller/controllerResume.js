const createResumeSchema = require('../Schema/createResumeSchema');

const createResume = async (req, res) => {
    try {
        const resume = new createResumeSchema({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            degree: req.body.degree,
            institution: req.body.institution,
            gpa: req.body.gpa,
        });

        const data = await resume.save();
        res.status(200).json({
            data: data,
            message: 'Resume created successfully',
        });
    } catch (error) {
        console.error(`Error in creating resume: ${error.message}`);
        res.status(500).json({
            message: 'An error occurred while creating resume',
            error: error.message,
        });
    }
};

// Find all resumes 
const viewAllResumes = async (req, res) => {
    try {
        const resumes = await createResumeSchema.find()
        res.status(200).json({
            data: resumes,
            message: 'Resumes fetched successfully',
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while fetching resumes',
            error: error.message,
        })
    }
}

// Find one resume
const viewResume = async (req, res) => {
    try {
        const _id = req.params.id
        const data = await createResumeSchema.findOne({ _id })
        res.status(200).json({
            data: data,
            message: 'Single resume found'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error while serching resume' + error.message
        })
        console.error(error.message);
    }
}

// Delete a resume
const deleteResume = async (req, res) => {
    try {
        const _id = req.params.id
        const data = await createResumeSchema.findByIdAndDelete(_id)
        res.status(200).json({
            data: data,
            message: 'Resume deleted successfully'
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: 'Error while deleting resume' + error.message
        })
    }
}

// editresume

const editResume = async (req, res) => {
    try {
        const _id = req.params.id
        const data = await createResumeSchema.findByIdAndUpdate(_id, req.body)
        res.status(200).json({
            data: data,
            message: 'Resume updated successfully'

        })
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message: 'Error while updating resume' + error.message
        })
    }
}

module.exports = {
    createResume,
    viewAllResumes,
    viewResume,
    deleteResume,
    editResume
};
