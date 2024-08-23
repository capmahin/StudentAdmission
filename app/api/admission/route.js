import connectDB from "@/app/lib/mongodb";
import Admission from "@/app/models/admission";
import { NextResponse } from "next/server";

export async function POST(req){
    const {fullname, email, message}= await req.json();

    try{
        await connectDB();
        await Admission.create({fullname,email,message});
       
        return NextResponse.json({
            msg:["Message sent successfully"],
            success:true,
        })
        
    }catch(error){
        
    }

     
}