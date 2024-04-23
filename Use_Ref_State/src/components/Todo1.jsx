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
  const handlesybmit = (event) =>{
    const dataadd = event.target.value
    const adddata = [...data,dataadd]
    setdata(adddata)
  }
  const Submit = ()=>{

  }

  return (
    
    <>
        <div className='container justfy-center'>
            <div className='ml-3 col-3'>
              <input type="text" placeholder='name' onChange={handlesybmit}/>
              <input type="text" placeholder='city'onChange={handlesybmit}/>
              <input type="text" placeholder='age'onChange={handlesybmit}/>
              <button onClick={Submit}>Add</button>
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
