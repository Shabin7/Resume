const createResumeSchema = require("../Schema/createResumeSchema")

const createResume = async (req, res) => {
    try {
        const resume = new createResumeSchema({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            degree: req.body.degree,
            institution: req.body.institution,
            gpa: req.body.gpa,
            companyName: req.body.companyName,
            position: req.body.position,
            duration: req.body.duration
        })
        const data = await resume.save()
        res.status(200).json({
            data: data,
            message: 'resume created successfully',
        })

    } catch (error) {
        console.error(`error in creating resume:${error.message}`);
        res.status(500).json({
            message: 'An error occurred while creating resume',
            error: error.message,
        })
    }

}