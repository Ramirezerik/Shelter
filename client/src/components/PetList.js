import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Header from './Header';

const PetList = (props) => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setAllPets(response.data);
            })
            .catch((err)=> {
                console.log(err)
            })
    }, [])

    return(
        <div>
            <Header link={'/new'} linkText="Add a Pet" subText="These pets are looking for a good home!"/>
            <table style={{margin:"auto", border:"solid black", fontSize:"25px", fontFamily:"monospace"}}>
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Type</th> 
                        <th>Actions</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        allPets?
                        allPets.map((pet, index)=> (
                            <tr key={index}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                            <button onClick={()=>{navigate(`/edit/${pet._id}`)}} className="btn btn-link">Edit</button>
                            <button onClick={()=>{navigate(`/details/${pet._id}`)}} className="btn btn-link">Details</button>
                            </tr>
                        ))
                        :null
                    }
                </tbody>
            </table>
        </div>
    )
}
export default PetList;

//
