// const { Router } = require('express');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// const { render } = require('../configs/app');

//connect with model 
let assignment = require('../models/assignment');
let assignmentController = require('../controller/assignments')

// read
router.get('/',assignmentController.displayAssignmentPage);

/* operations */
/* add operatoion */ 
router.get('/add',assignmentController.displayAddPage);
router.post('/add',assignmentController.processAddPage);

/* edit */
router.get('/edit/:id',assignmentController.displayEditPage);
router.post('/edit/:id',assignmentController.processEditPage);

/* delete */
router.get('/delete/:id',assignmentController.performDeletePage);

module.exports=router;