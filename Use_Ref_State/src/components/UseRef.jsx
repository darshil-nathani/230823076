import React, { useState, useRef, useEffect } from 'react';

export default function UseRef() {
  
    const inputNameRef = useRef("");
    const inputCityRef = useRef("");
    const inputMobileRef = useRef("");
    const inputEmailRef = useRef("");

    const [Name, setName] = useState("Darshil");
    const [City, setCity] = useState("rajkot");
    const [Mobile, setMobile] = useState("7698849647");
    const [Email, setEmail] = useState("darshilnathani@gmail.com");

    function handlesubmit() {
        alert(`Name:${inputNameRef.current.value},City:${inputCityRef.current.value},Mobile no:${inputMobileRef.current.value},Email:${inputEmailRef.current.value}`)
    }
    function click() {
        console.log(`Name:${inputNameRef.current.value},City:${inputCityRef.current.value},Mobile no:${inputMobileRef.current.value},Email:${inputEmailRef.current.value}`)
    }
    useEffect(() => {
        console.log(`Name:${inputNameRef.current.value},City:${inputCityRef.current.value},Mobile no:${inputMobileRef.current.value},Email:${inputEmailRef.current.value}`)
    }, [setName, setCity, setMobile, setEmail])

    return (
        <>
            <h2 style={{ marginBottom: '20px',color: '#333',backgroundColor: City === 'rajkot' ? 'red' : 'pink', fontSize: '24px'}}>{`${Name},${City},${Mobile},${Email}`}</h2><br />
            <form onSubmit={handlesubmit}>
                <label htmlFor="">name : </label>
                <input type="text" onChange={(e) => setName(e.target.value)} name="Name" ref={inputNameRef} style={{  border: '2px solid black',padding: '8px',borderRadius: '5px',marginBottom: '10px', }} /><br/>
                <label htmlFor="">city : </label>
                <input type="text" onChange={(e) => setCity(e.target.value)} name="City" ref={inputCityRef} style={{  border: '2px solid black',padding: '8px',borderRadius: '5px',marginBottom: '10px', }} /><br/>
                <label htmlFor="">Mobile no. : </label>
                <input type="text" onChange={(e) => setMobile(e.target.value)} name="Mobile" ref={inputMobileRef} style={{  border: '2px solid black',padding: '8px',borderRadius: '5px',marginBottom: '10px', }} /><br/>
                <label htmlFor="">Email : </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} name="Email" ref={inputEmailRef} style={{  border: '2px solid black',padding: '8px',borderRadius: '5px',marginBottom: '10px', }} /><br/>
                <button type="submit" onClick={click}
                    style={{ backgroundColor: '#ff5733',color: '#fff',padding: '10px 20px',border: 'none',borderRadius: '5px',cursor: 'pointer',fontSize: '16px',fontWeight: 'bold', boxShadow: '0px 3px 5px rgba(0,0,0,0.3)',transition: 'background-color 0.3s ease'}}>
                    submit
                </button>
            </form>
            <div>
                
            </div>
        </>
    );
};
