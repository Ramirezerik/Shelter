import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Header from './Header';

const PetDetails =(props) => {
    const {id} = props;
    const [pets, setPets] = useState({});
    const [pet, setPet] = useState({});

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((response)=> {
                console.log(response);
                console.log(response.data);
                setPets(response.data)
            })
            .catch((err)=> {
                console.log(err)
            })
    }, [id])

    const deleteHandler = (id)=> {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then((response)=> {
                console.log(response);
                setPet(pet.filter((pet)=> pet._id) !== id);
            });
    }

    return(
        <div>
            <Header link={'/'} linkText="Back to Homepage" subText="Details About " />
            <h1>{pets.name}</h1>
            <fieldset>
                <h3>Pet Type: {pets.type}  </h3>
                <h3>Pet Description: {pets.description} </h3>
                <h3>Skills: </h3>
                    <li>{pets.skill1}</li>
                    <li>{pets.skill2}</li>
                    <li>{pets.skill3}</li>
                    <br />
                    <input type="button" onClick={(e)=>deleteHandler(pets._id)} className="btn btn-danger" value="Adopt Pet"  />
            </fieldset>
        </div>
    )
}

export default PetDetails;

//
