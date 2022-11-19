let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with model 
let assignment = require('../models/assignment');

// display assignment page
module.exports.displayAssignmentPage = (req,res,next)=>{
    assignment.find((err, assignmentlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('assignment/list',{
                 title: 'Assignment',
                 Assignmentlist: assignmentlist
                })
        }
    });
};

// add operation 
module.exports.displayAddPage = (req,res,next)=> {
    res.render('assignment/add',{title:'Add'})
};

module.exports.processAddPage = (req,res,next)=> {
    let newAssignment = assignment ({
        "name":req.body.name,
        "Due-date":req.body.Due_date,
        "description":req.body.description,
    });
    assignment.create(newAssignment,(err,assignment) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment-list')
        }
    })
};

// edit operation 
module.exports.displayEditPage = (req,res,next)=> {
    let id = req.params.id;
    assignment.findById(id,(err,assignmentEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('assignment/edit',{title:'Edit Book', assignment: assignmentEdit})
        }

    })
};

module.exports.processEditPage = (req,res,next)=> {
    let id=req.params.id;
    let updateAssignment = assignment({
        "_id":id,
        "name":req.body.name,
        "Due-date":req.body.Due_date,
        "description":req.body.description,
    });
    assignment.updateOne({_id:id},updateAssignment,(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
           res.redirect('/assignment-list');
        }
    })
};

// delete operation 
module.exports.performDeletePage = (req,res,next)=> {
    let id =req.params.id;
    assignment.deleteOne({_id:id},(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
           res.redirect('/assignment-list');
        }
    })
};