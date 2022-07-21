//this function allows us to connect our models that will be used to store collected data in our DB
const mongoose = require('mongoose');

const PetSchema= new mongoose.Schema(
    {
        name: {
            type: String,
            required:[true, "Name is required"],
            minLength:[3, "Name must be at least 3 characters long!"]
        },
        type: {
            type: String,
            required:[true, "Type of pet is required"],
            minLength:[3, "Pet type must be at least 3 characters long!"]
        },
        description: {
            type: String,
            required:[true, "Description of pet is required"],
            minLength:[3, "Description must be at least 3 characters long!"]
        },
        skill1: {
            type: String,
            required:[true, "Primary skill is required"]
        },
        skill2: {
            type: String,
            required:[true, "Secondary skill is required"]
        },
        skill3: {
            type: String,
            required:[true, "Additional skill is required"]
        },
    },
    {timestamps:true}
);

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;


//
