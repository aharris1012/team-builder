import React from "react";

const Team= props =>{

    return(
        <div className="teams-people">
            {props.People.map(people =>{
                return(
                    <div className="people" key={people.id}>
            <h1> Teamates Name:{people.name}</h1>
                <span>Teamates Email:{people.email}</span>
            <p>Teamates Role: {people.role}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Team;