import mongoose from "mongoose";

const contactSchema=mongoose.Schema({
    name: {
        type:String,
        required:[true, "Please add the contact name"]
    },
    email: {
        type:String,
        required:[true, "Please add the contact enail"]
    },
    phone: {
        type:String,
        required:[true, "Please add the contact Phone Number"]
    }

},
{
    timestamps:true,
});

export default mongoose.model("Contact", contactSchema)