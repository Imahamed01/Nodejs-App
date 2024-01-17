import asyncHandle from 'express-async-handler'
import Contact from '../models/contactModel.js'

export const getAllContacts= asyncHandle(async(req,res)=>{
  res.status(200).json({"message":"Get all endpoint"});
});

export const GetContactByID= asyncHandle(async(req,res)=>{
    res.status(200).json({"message":"Get all endpoint"});

});

export const PostContacts= asyncHandle(async(req,res)=>{
    console.log(req.body);
    const{name,email,phone}=req.body;
    if(!name || !email || !phone)
    {
        res.status(400);
        throw new Error("ALL Field Mandatory");
    }

    const contact= await Contact.create({
        name,
        email,
        phone
    })
    res.status(200).json(contact)
});
  
  export const PutContact= asyncHandle(async(req,res)=>{
    res.status(200).json({"message":"Put all endpoint"});
});

export const deleteContact= asyncHandle(async(req,res)=>{
    res.status(200).json({"message":"delete all endpoint"});
});

