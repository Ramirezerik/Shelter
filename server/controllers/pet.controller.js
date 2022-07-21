// const { response } = require("express");

// module.exports.index= (request, response) => {
//     response.json({
//         message: "Hello World"
//     })
// }
//the above code helps us test our connection of our backend to the front end (client)

//this method will handle the creation of our new Pets that will be added
// const { response, request } = require('express');
// const { findOneAndUpdate } = require('../models/Pet.model');

const Pet = require('../models/Pet.model');
module.exports = {
    //creates new pet entry in db
    createPet:(request, response) => {
        Pet.create(request.body)
        .then((newPet)=> {
            response.json(newPet);
        })
        .catch((err)=> {
            console.log(err);
            response.json(400).json(err);
        })
    }, 

    //finds 1 specific pet from db
    getOnePet:(request, response) => {
        Pet.findById({_id:request.params.id})
        .then((onePet)=> {
            response.json(onePet)
        })
        .catch((err)=> {
            console.log(err);
            response.status(400).json(err);
        })
    },

    //gets all pets from db
    getAllPets:(request, response) => {
        Pet.find({}).collation({locale: 'en', strength:2}).sort({petName:1})
        .then((allPets) => {
            response.json(allPets);
        })
        .catch((err)=> {
            console.log(err);
            response.status(400).json(err);
        })
    },

    //delete an existing pet from db
    deletePet:(request, response) => {
        Pet.deleteOne({_id:request.params.id})
        .then((deletedPet)=> {
            console.log('Pet Deleted')
            response.json(deletedPet)
        })
        .catch((err)=> {
            console.log(err);
            response.status(400).json(err);
        })
    },

    //edits info on existing pet
    editPet:(request, response)=> {
        findOneAndUpdate({_id:request.params.id},
            request.body,
            {
                new:true,
                runValidators:false,    //valdation requisites will be active for edits made
            })
            .then((updatedPet)=> {
                console.log(updatedPet);
                response.json(updatedPet);
            })
            .catch((err)=> {
                console.log(err);
                response.status(400).json(err);
            })
    }
};

//
