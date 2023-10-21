import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App(){
    const [selection, setselection] = useState(null);

    const handleSelect = (option) =>{
        setselection(option);
    }

    const options = [
        {label:'Red', value:'red'},
        {label:'Green', value:'green'},
        {label:'Blue', value:'blue'},
    ]

    return <Dropdown options={options} value={selection} onChange={handleSelect}/>
}

export default App;