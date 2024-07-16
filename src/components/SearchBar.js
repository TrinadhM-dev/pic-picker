import { useState } from "react";
import './ImageShow.css';
import 'bulma/css/bulma.css';
function SearchBar({onSubmit}){
    const name='Trinadh'
    //1. Creating the new State
 const [term,setTerm] = useState('');
const HandleFormSubmit =(e)=>{
    e.preventDefault();

    onSubmit(term);
}
//Create an event handler to watch for the 'OnChange' event
//Event Handler
const HandleChange = (event)=>{
    setTerm(event.target.value);
}
return(
<div className="search-bar">
    <form onSubmit={HandleFormSubmit}>
        <label className="has-background-danger-dark">Enter Search Term <p>@{name}</p> </label>
    <input  className="input --bulma-primary-light" value={term} onChange={HandleChange} />
    </form >
</div>
)
}

export default SearchBar;