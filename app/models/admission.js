const { Schema } = require("mongoose");


const admissionSchema = new Schema({
    fullname:{
        type: String,
        required:[true, "Name is required"],
        trim:true,
        minLength:[2, "Name must be larger then 2 Characters"],
        maxLength:[50, "Name must be lesser then 50 characters"]
    },
})