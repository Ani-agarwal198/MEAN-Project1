const express=require('express');
const router=express.Router();

const Contact = require('../models/contacts');

//retrieving contact
router.get('/contacts',(req,res,next)=>{
    Contact.find(function(err,contacts){
        res.json(contacts);
    });
});

//add contact
router.post('/contact',(req,res,next)=>{
    //logic to add contact
    let newContact=new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err,contact)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact added succesfully'});
        }
    });
});

//delete contacts
router.delete('/contact/:id',(req,res,next)=>{
    //logic to delete contact
    Contact.remove({_id: req.params.id},function(err,result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
});
module.exports = router;