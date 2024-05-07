import React,{useState , useEffect} from 'react'

export default function Exam2() {

    const[myData, setmyData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(function(){
          let fetchRes = fetch("https://dummyjson.com/products");
          fetchRes.then(res =>
              res.json()).then(data => {
                  setmyData(data.products)
              })},[])
    // console.log(myData);

    useEffect(()=>{
        setFilteredData(myData);
    },[myData])

    const filter = () => {
        const filtered = myData.filter(item => item.brand === "Samsung");
        setFilteredData(filtered);
      };
      const filter1 = () => {
        const filtered = myData.filter(item => item.brand === "Apple");
        setFilteredData(filtered);
      };
      const filter2 = () => {
        const filtered = myData.filter(item => item.brand === "OPPO");
        setFilteredData(filtered);
      };
      const all = () => {
        const filtered = myData;
        setFilteredData(filtered);
      };
    
  return (
    <>
    <div style={{textAlign:"center"}} className='m-2 '>
        <button className='btn btn-danger m-1' onClick={filter}>Samsung</button>
        <button className='btn btn-warning m-1' onClick={filter1}>Apple</button>
        <button className='btn btn-info m-1' onClick={filter2}>OPPO</button>
        <button className='btn btn-dark m-1' onClick={all}>all</button>
    </div>
        <div className='row' >
            {filteredData.map(item=>
            <div className='col-md-4'>
                <div className="card border-5 mt-1" style={{"width": "100%",height:"200px"}} key={item.title}>
                <div className="card-body">
                    <h3 className="card-title fs-5">Title: {item.title}</h3>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">Brand: {item.brand}</p>
                    <a href="#" className="btn btn-primary" style={{position:"absolute",bottom:"10px"}}>Go somewhere</a>
                </div>
                </div>
            </div>
            )}
        </div>
    </>
  )
}
