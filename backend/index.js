import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import RegisterModel from './models/Register.js';

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/register');

app.post('/register',(req,res)=>{
    const {firstName, lastName, userName, city, state, zip, termCheck} = req.body;
    RegisterModel.findOne({userName: userName}).then(user =>{
        if(user){
            res.json("Already have account!!!");
        }else{
            RegisterModel.create({firstName:firstName, lastName:lastName, userName:userName, city:city, state:state, zip:zip, termCheck:termCheck}).then(result => res.json("Account Created."))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err));
})

app.listen(8000,()=>{
    console.log('Server is running');
})
