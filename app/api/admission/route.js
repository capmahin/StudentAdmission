import connectDB from "@/app/lib/mongodb";
import Admission from "@/app/models/admission";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    const {fullname,fathername,mothername, email, message,messagep}= await req.json();

    try{
        await connectDB();
        await Admission.create({fullname,fathername,mothername, email,message,messagep});
       
        return NextResponse.json({
            msg:["Admission done  successfully"],
            success:true,
        })
        
    }catch(error){
        if(error instanceof mongoose.Error.ValidationError){
            let errorList = [];
            for (let e in error.errors){
                errorList.push(error.errors[e].message);
            }
            console.log(errorList)

            return NextResponse.json({msg: errorList})
        }
        else{
            return NextResponse.json({msg: "Unable to admission."})
        }
    }

     
}