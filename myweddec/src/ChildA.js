// Render list based on given data and sort lastseenvise
import React from "react";

const RenderList=()=>{
    let data=[{
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "age": 28,
        "lastSeen": "2024-11-29T08:45:00Z"
      },
      {
        "name": "Bob Smith",
        "email": "bob.smith@example.com",
        "age": 35,
        "lastSeen": "2024-11-29T07:30:00Z"
      },
      {
        "name": "Charlie Brown",
        "email": "charlie.brown@example.com",
        "age": 22,
        "lastSeen": "2024-11-28T22:15:00Z"
      },]


    let sortedData = [...data].sort((a, b) => new Date(a.lastSeen) - new Date(b.lastSeen));
    console.log("sortedData===>",sortedData);
    
    return(
        <>
        <p>{sortedData.map((item,i)=>{

            return(
                <ul key={i}>
                    <li>
                    <p>name:{item.name}</p>
                    <p>emai:{item.email}</p>
                    <p>age:{item.age}</p>
                    <p>lastSeen:{item.lastSeen}</p>
                    </li>
                </ul>
            )
        })}</p>
        </>
    )

}
export default RenderList;