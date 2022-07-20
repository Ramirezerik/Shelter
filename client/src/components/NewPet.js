import React, { useState } from 'react';
import { navigate, } from '@reach/router';
import axios from 'axios';
import Header from './Header';


// const NewPet =() => {
//     const [message, setMessage] = useState("Loading...")
//     useEffect(()=> {
//         axios.get('http://localhost:8000/api')
//         .then(response=> setMessage(response.data.message))
//         .catch(error=>console.log(error))
//     }, []);

//     return(
//         <div>
//             <h2>Message from Backend:{message}</h2>
//         </div>
//     )
// }

//code above used to test if our front end was connected to our back end

const NewPet=(props) => {
    const [errors, setErrors]= useState({});
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDes, setPetDes] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");

    const newSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
            name: petName,
            type: petType,
            description: petDes,
            skill1,
            skill2,
            skill3
        })
        .then((response)=> {
            console.log(response.data);
            navigate("/"); //check to see if @reach/router depend. required 
        })
        .catch((err)=> {
            console.log(err.response);
            setErrors(err.response.data.errors);
        });
    };

    return(
        <div>
            <Header link={'/'} linkText="Back to homepage" subText="Know a pet in need of a new home?"/>
            <form onSubmit={newSubmitHandler}>
                <p>
                    Pet Name:
                    <input type="text" onChange={(e)=> setPetName(e.target.value)} value={petName}/> <br />
                </p>
                <p>
                    Pet Type:
                    <input type="text" onChange={(e)=>setPetType(e.target.value)} value={petType}/> <br />
                </p>
                <p>
                    Pet Description:
                    <input type="text" onChange={(e)=> setPetDes(e.target.value)} value={petDes}/> <br />
                </p>
                <p>Skills:</p>
                <p>
                    skill 1: {" "}
                    <input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1}/>
                </p>
                <p>
                    skill 2: {" "}
                    <input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2}/>
                </p>
                <p>
                    skill 3: {" "}
                    <input type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
                </p>
                <input type="submit" value="Add Pet" className="btn btn-primary"/>
            </form>
            {errors &&
                Object.keys(errors).map((objKey, index) => (
                    <p key={index}>{errors[objKey].message}</p>
                ))}
        </div>
    )
}

export default NewPet;

//
