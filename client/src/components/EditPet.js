import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Header from './Header';

const EditPet = (props) => {
    
    const {id} = props;
    const [updateName, setUpdateName] = useState("");
    const [updateType, setUpdateType] = useState("");
    const [updateDes, setUpdateDes] = useState("");
    const [updateSkill1, setUpdateSkill1] = useState("");
    const [updateSkill2, setUpdateSkill2] = useState("");
    const [updateSkill3, setUpdateSkill3] = useState("");

    //useEffect will retireve the currrent values of our pet so we can fill
    //in the form with what is currently in our db
    //in short: form is pre-populated with existing data
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then((response)=> {
                console.log(response.data);
                setUpdateName(response.data.name);
                setUpdateType(response.data.type);
                setUpdateDes(response.data.description);// might have to use des in case error here
                setUpdateSkill1(response.data.skill1);
                setUpdateSkill2(response.data.skill2);
                setUpdateSkill3(response.data.skill3);
            })
            .catch((err)=> {
                console.log(err);
                navigate('/error');
            })
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, {
            name:updateName,
            type:updateType,
            description: updateDes,
            skill1: updateSkill1,
            skill2: updateSkill1,
            skill3: updateSkill3
        })
        .then((response)=> {
            console.log(response.data);
            navigate("/");
        })
        .catch((err)=> {
            console.log(err.data);
        });
    };

    return(
        <div>
            <Header link={'/'} linkText="Back to Homepage"  subText="Edit Pet"/>
            <form style={{margin:'auto', border:'2px solid black'}} onSubmit={onSubmitHandler}>
                <p>
                    Name:
                    <input type="text" onChange={(e)=> setUpdateName(e.target.value)} value={updateName} />
                </p>
                <p>
                    Type:
                    <input type="text" onChange={(e)=> setUpdateType(e.target.value)} value={updateType} />
                </p>
                <p>
                    Description:
                    <input type="text" onChange={(e)=> setUpdateDes(e.target.value)} value={updateDes} />
                </p>
                <br />
                <p>Skills </p>
                <p>
                    Skill 1:
                    <input type="text" onChange={(e)=> setUpdateSkill1(e.target.value)} value={updateSkill1} />
                </p>
                <p>
                    Skill 2:
                    <input type="text" onChange={(e)=> setUpdateSkill2(e.target.value)} value={updateSkill2} />
                </p>
                <p>
                    Skill 3:
                    <input type="text" onChange={(e)=> setUpdateSkill3(e.target.value)} value={updateSkill3} />
                </p>
                <button className="btn btn-primary" >Edit Pet</button>
            </form>
        </div>
    )
}

export default EditPet;

//

