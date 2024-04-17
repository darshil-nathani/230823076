import React from 'react'
import { useState, useEffect, useRef } from 'react'


export default function Pre(props) {

      // useState to initialize, access, and modify personal information
      const [person, setPerson] = useState({
        name: '',
        city: ''
      });
    
      const [showCard, setShowCard] = useState(false);
    
      // useEffect to log whenever person details change
      useEffect(() => {
        console.log('Person details updated:', person);
      }, [person]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setPerson((prevPerson) => ({
          ...prevPerson,
          [name]: value
        }));
      };
    
      const handleClick = () => {
        setShowCard(true);
      };
    
      return (
        <div>
          <h2>{props.heading}</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={person.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" value={person.city} onChange={handleChange} />
          </div>
          <button onClick={handleClick}>Show ID Card</button>
          {
        showCard ? (
          <div>
            <h3>ID Card Details</h3>
            <p><strong>Name:</strong> {person.name}</p>
            <p><strong>City:</strong> {person.city}</p>
          </div>
        ) : (
          <div>
            <p>Click the button to show ID card details</p>
          </div>
        )
      }
        </div>
      );
    

    // const [person, setPerson] = useState({
    //     name: '',
    //     city: ''
    //   });
    
    //   const [showCard, setShowCard] = useState(false);
    
    //   // useEffect to log whenever person details change
    //   useEffect(() => {
    //     console.log('Person details updated:', person);
    //   }, [person]);
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setPerson((prevPerson) => ({
    //       ...prevPerson,
    //       [name]: value
    //     }));
    //   };
    
    //   const handleClick = () => {
    //     setShowCard(true);
    //   };
    
    //   return (
    //     <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '400px', padding: '20px', border: '2px solid #333', borderRadius: '10px', backgroundColor: '#f0f0f0', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
    //       <h2 style={{ marginBottom: '20px' }}>ID Card</h2>
    //       <div style={{ marginBottom: '20px' }}>
    //         <label htmlFor="name" style={{ marginRight: '10px' }}>Name:</label>
    //         <input type="text" id="name" name="name" value={person.name} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
    //       </div>
    //       <div style={{ marginBottom: '20px' }}>
    //         <label htmlFor="city" style={{ marginRight: '10px' }}>City:</label>
    //         <input type="text" id="city" name="city" value={person.city} onChange={handleChange} style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc' }} />
    //       </div>
    //       <button onClick={handleClick} style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Show ID Card</button>
    //       {showCard && (
    //         <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #333', borderRadius: '10px', backgroundColor: '#fff' }}>
    //           <h3>ID Card Details</h3>
    //           <p><strong>Name:</strong> {person.name}</p>
    //           <p><strong>City:</strong> {person.city}</p>
    //         </div>
    //       )}
    //     </div>
    //   );


//         let initialValues = {
//             Name : "",
//             City : ""
//         }

//     const [details, setdetails] = useState([initialValues])
//     // const [city, setcity] = useState('')

    
//     const change = (event) => {
//         let values = [...details];
//         if (event.target.name === "name") {
//             values[0].Name = event.target.value;
//         } else if (event.target.name === "city") {
//             values[0].City = event.target.value;
//         }
//         setdetails(values)
//     }
//     console.log(details);
//     const click = ()=>{
//         alert(`${details.Name}`)
//     }

//   return (
//     <>
//         <div>
//                 <h2>{details.name}</h2>
//                 <form action="" onSubmit={click}>
//                     <label htmlFor="">name : </label>
//                     <input type="text" name='name' onChange={(e) => change(e)} />
//                     <br /><br />
//                     <label htmlFor="">city : </label>
//                     <input type="text" name='city' onChange={(e) => change(e)} />
//                     <button type='submit'>submit</button>
//                 </form>
//       </div>
//     </>
//   )
}

// import react, {useEffect, useState} from 'react';
// import axios from 'axios';

// function App() {
//   const weatherdata = {
//     "city":"Europe/Berlin",
//     "temp":10,
//     "wspd":20
//   }

//   const [myData, setMyData] = useState({});

//   const options = {
//     method: 'GET',
//     url: 'https://meteostat.p.rapidapi.com/stations/hourly',
//     params: {
//       station: '10637',
//       start: '2023-02-01',
//       end: '2023-02-01',
//       tz: 'Europe/Berlin'
//     },
//     headers: {
//       'X-RapidAPI-Key': '165e4b751fmshe768d6e2aa1ad9ap197c0bjsn4c18dc77482b',
//       'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
//     }
//   };
  
  

//   useEffect(function(){
//     // API for get requests
//     // let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1");
      
//     // // FetchRes is the promise to resolve
//     // // it by using.then() method
//     // fetchRes.then(res =>
//     //     res.json()).then(data => {
//     //         console.log(data)
//     //         setMyData(data)
//     //     })

//     // axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//     //   setMyData(response.data);
//     // });

//     async function callWeather(){
//       try {
//         const response = await axios.request(options);
//         console.log(response.data.data[0]);
//         setMyData(response.data.data[0])
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     callWeather();

//     },[])


//   return (
//     <>
//       <h1>Weather Forcast Application</h1>
//       <hr ></hr>
//       {/* <h3>{myData.title}</h3> */}
//       <hr ></hr>
//       <p>City<span style={{"color":"blue"}}> : {weatherdata.city}</span></p>
//       <p>Wind<span style={{"color":"blue"}}> : {myData.wspd}</span></p>
//       <p>Temp.<span style={{"color":"blue"}}> : {myData.temp}</span></p>
//     </>
//   )
// }

// export default App;
// App.js
// Displaying App.js.
