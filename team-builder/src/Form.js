import React, {useState} from "react";


const Form = props =>{
    const [team, setTeam] = useState ({name:' ', email:' ',role: ' '});

    const handleChanges = ele =>{
        setTeam({...team,[ele.target.name]: ele.target.value});
    };

    const handleSubmit = ele => {
        ele.preventDefault();
        props.form (team);
        setTeam ({name:' ', email: ' ', role: ' '});
    };



return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Teammate's Name</label>
        <input name="name"
        placeholder="name"
        value={team.name}
        type="text"
        onChange={handleChanges}/>

        <button type="submit">Click me & Add</button>
        <label htmlFor="name">Teammate's email</label>
        <input
        name="email"
        placeholder="myemail@gmail.com"
        value="{team.email}"
        type="text"
        onChange={handleChanges}
        />

<label htmlFor="name">Teammate's Role</label>
        <input name="role"
        placeholder="What's your role"
        value={team.role}
        type="text"
        id="role"
        onChange={handleChanges}/>


    </form>
)
}
export default Form;










