import React from "react";

const Team= props =>{

    return(
        <div className="teams-people">
            {props.people.map(mem =>{
                return(
                    <div className="people" key={mem.id}>
            <h1>  Name:{mem.name}</h1>
                <span> Email:{mem.email}</span>
            <p>Role: {mem.role}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default Team;