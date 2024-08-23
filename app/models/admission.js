import mongoose, { Schema } from "mongoose";


const admissionSchema = new Schema({
    fullname:{
        type: String,
        required:[true, "Name is required"],
        trim:true,
        minLength:[2, "Name must be larger then 2 Characters"],
        maxLength:[50, "Name must be lesser then 50 characters"]
    },

    email:{
        type: String,
        required:[true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],

    },
    message: {
        type: String,
        required: [true, "Message is required."],
      },
    
      date: {
        type: Date,
        default: Date.now,
      },
});

const Admission = 
mongoose.models.Admission || mongoose.model("Admission", admissionSchema);

export default Admission;