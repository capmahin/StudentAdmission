import { NextResponse } from "next/server";

export async function POST(req){
    const {fullname, email, message}= await req.json();

    console.log("Full name:", fullname);
     console.log("Email name:", email);
     console.log("Message:", message);

     return NextResponse.json({msg:["hi from admission route.js"]})
}