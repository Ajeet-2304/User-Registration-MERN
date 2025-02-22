import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    city: String,
    state: String,
    zip: String,
    termCheck: Boolean
});

const RegisterModel = mongoose.model('register',RegisterSchema);


export default  RegisterModel;