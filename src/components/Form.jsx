
import { useState } from "react";
import axios from "axios";

export const Forms = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        address: "",
        department: "--select--",
        salary: "",
        married: "",
              
    });

   // const [isChecked, setIsChecked]= useState(false)

   

    const handleChange = (e) => {
       // console.log(e.target.value)
        let { id, value, checked, type } = e.target;
        value = type === "checkbox" ?   checked : value;
        setFormData({
            ...formData,
            [id] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       // console.log(formData);
        axios.post("http://localhost:3003/employees", formData);
        setFormData({
         name: "",
        age: "",
        address: "",
        department: "--select--",
        salary: "",
        married: "",
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Employee Details</h3>
            <input id="name" type="text" onChange={handleChange} placeholder="enter name" value={ formData.name}/>
            <br/>
            <input id="age" type="number" onChange={handleChange} placeholder="enter age" value={ formData.age} /> <br />
            <input id="address" type="text" onChange={handleChange} placeholder="enter address" value={ formData.address}/>
             <label>Department</label>
            <select id="department" onChange={handleChange}>
                <option>--select--</option>
                <option>Tech</option>
                <option>IT</option>
                <option>Technician</option>
            </select> <br />
             <input id="salary" type="number" onChange={handleChange} placeholder="enter salary" value={ formData.salary}/> <br /> 
             
            
          <input
            id="married"
                type="checkbox"
                value="true"
            checked={formData.married}
            onChange={handleChange} />
           Married
        <br />
        
            
             <input type="submit" value="submit"/>
        </form>
    )
}