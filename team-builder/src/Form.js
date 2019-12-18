import React, {useState} from "react";


const Form = props =>{
    const [team, setTeam] = useState ({name:' ', email:' ',role: ' '});

    const handleChanges = ele =>{
        setTeam({...team,[el.target.name]: ele.target.value});
    };

    const handleSubmit = ele => {
        el.preventDefault();
        props.form (team);
        setTeam ({name:' ', email: ' ', role: ' '});
    };



























}










