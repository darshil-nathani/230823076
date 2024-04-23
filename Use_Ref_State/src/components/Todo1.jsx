import React from 'react'
import { useState } from 'react';

let student = [
    {
      "name": "John Smith",
      "city": "New York",
      "age": 20
    },
    {
      "name": "Emily Johnson",
      "city": "shapar",
      "age": 21
    },
    {
      "name": "Michael Brown",
      "city": "rajkot",
      "age": 19
    },
    {
      "name": "Emma Davis",
      "city": "shapar",
      "age": 22
    },
    {
      "name": "Daniel Wilson",
      "city": "rajkot",
      "age": 20
    }
  ]



export default function Todo1() {
    const [data , setdata] = useState(student);
    const [filteredData, setFilteredData] = useState(data);
    const [formData, setFormData] = useState({ name: '', city: '', age: '' });

  const filter = () => {
    const filtered = data.filter(item => item.city === "rajkot");
    setFilteredData(filtered);
  };
  const filter1 = () => {
    const filtered = data.filter(item => item.city === "shapar");
    setFilteredData(filtered);
  };
  const all = () => {
    const filtered = data;
    setFilteredData(filtered);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};
const handleSubmit = (e) => {
  const newData = [...data, formData];
  setdata(newData);
  setFormData({ name: '', city: '', age: '' }); 
};


  return (
    
    <>
        <div className='container justfy-center'>
            <div className='ml-3 display-flex'>
              <input type="text" placeholder='name' onChange={handleInputChange}/>
              <input type="text" placeholder='city'onChange={handleInputChange}/>
              <input type="text" placeholder='age'onChange={handleInputChange}/>
              <button onClick={handleSubmit}>Add</button>
            </div>
            <div className='ml-3'>
            <button onClick={filter} className='btn btn-danger '>rajkot</button>
            <button onClick={filter1} className='btn btn-danger ml-3'>shapar</button>
            <button onClick={all} className='btn btn-danger ml-3'>all</button>
            </div>
            {filteredData.map(item =>
                <div className="card border-5 mt-1" style={{"width": "18rem"}} key={item.name}>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.city}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            )}
        </div>
    </>
  )
}
