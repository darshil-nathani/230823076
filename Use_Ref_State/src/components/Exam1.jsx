import React ,{useEffect , useState} from 'react'

export default function Exam1() {
    let value = {
        yourname : "",
        Fathername : "",
        Email : "",
        Mobile : "",

};
    const[data , setdata] = useState([value]);
    const [change , setchange] = useState('');

    const changeHandler  = (event) => {
        let values = [...data];
        if(event.target.name === 'name'){
            values[0].yourname = event.target.value;
        }else if(event.target.name === 'father'){
            values[0].Fathername = event.target.value;
        }else if(event.target.name === 'email'){
            values[0].Email = event.target.value;
        }
        else if(event.target.name === 'mobile'){
            values[0].Mobile = event.target.value;
        }
        setdata(values);

        if(data[0].yourname === 'darshil'){
            setchange('yellow')
        }else{
            setchange('red')
        }
    }
    console.log(data);

    const colorchange = ()=>{
        
    }
  return (
   <>
   <div className='row'> 
    <div className='col-md-6'>
        <form action="">
            <label htmlFor="">Your_name : </label>
            <input type="text" name='name' onChange={(e) => changeHandler(e)} /><br /><br />
            <label htmlFor="">Father_name : </label>
            <input type="text" name='father' onChange={(e) => changeHandler(e)} /><br /><br />
            <label htmlFor="">email : </label>
            <input type="text" name="email" id="" onChange={(e) => changeHandler(e)} /><br /><br />
            <label htmlFor="">mobile no : </label>
            <input type="text" name="mobile" id="" onChange={(e) => changeHandler(e)} /><br /><br />
            <button type='submit' onClick={colorchange}>Submit</button>
        </form>
    </div>
    <div className='col-md-6' style={{'backgroundColor' : change, width:"500px",textAlign:"center", border:"2px solid black"}}>
        <h2 className='mb-2 fs-5'>Name : </h2>
        <h2 className='mb-5'>{`${data[0].yourname}`}</h2>
        <h2 className='mb-2 fs-5' >Father Name : </h2>
        <h2 className='mb-5'>{`${data[0].Fathername}`}</h2>
        <h2 className='mb-2 fs-5'>Email : </h2>       
        <h2 className='mb-5'>{`${data[0].Email}`}</h2>
        <h2 className='mb-2 fs-5'>Mobile : </h2>
        <h2 className='mb-5'>{`${data[0].Mobile}`}</h2>
    </div>
    </div>
   </>
  )
}
