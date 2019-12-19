import React from "react";

const Team= props =>{

    return(
        <div className="teams-people">
            {props.people.map(mem =>{
                return(
                    <div className="people" key={mem.id}>
            <h1> {mem.name}</h1>
                <span> {mem.email}</span>
            <p> {mem.role}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Team;