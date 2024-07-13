const express = require('express');
const routes = express.Router()
const controller = require('./Controller/controllerResume')

routes.post('/create-resume', controller.createResume)
routes.get('/view-all-resume', controller.viewAllResumes)
routes.get('/view-resume/:id', controller.viewResume)
routes.delete('/delete-resume/:id', controller.deleteResume)
routes.put('/edit-resume/:id', controller.editResume)

module.exports = routes