import React,{useEffect, useState} from "react"
import axios from "axios"


const PersonList = ()=>{
    const [persons,setPersons] = useState({persons: []})

    useEffect(()=>{
        getUsers()
    },[])
    
    async function getUsers(){
        await axios.get('https://jsonplaceholder.typicode.com/users').then(res=> {
        const persons= res.data;
        setPersons({persons})
    });
    }
    const result = Object.keys(persons).map((key) => {
        return { [key]: persons[key as keyof typeof persons] };
      });

    

    console.log(persons)
  
    return(
        <ul>
            {result.map((person: any)=><li key={person.id}>{person.name}</li>)}
        </ul>
    )
}

export default PersonList