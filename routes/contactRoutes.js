import express from 'express';
import {GetContactByID, getAllContacts, deleteContact, PostContacts, PutContact} from '../controller/contactController.js';
const contactRoutes=express.Router();



contactRoutes.route("/").get(getAllContacts);
contactRoutes.route("/:id").get(GetContactByID);
contactRoutes.route("/:id").delete(deleteContact);
contactRoutes.route("/:id").put(PutContact);
contactRoutes.route("/").post(PostContacts);

export default contactRoutes;