import React, { useEffect, useState } from 'react'

const Countries = () => {
    let [xcountries,setXcountries] = useState([]);
    
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>res.json())
        .then((data)=>setXcountries(data))
        .catch((err)=>console.error("Error fetching data",err))
    },[])

    const cardStyle = {
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      };
    
      const containerStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      };
    
      const imageStyle = {
        width: "100px",
        height: "100px"
      };

  return (
    <div style={containerStyle}>
        {xcountries.map((country)=>(
            <div key={country.cca3} style={cardStyle}>
                <img src={country.flags.png} alt={Flag of {country.name.common}} style={imageStyle}/>
                <h2>{country.name.common}</h2>
            </div>
        ))}
    </div>
  )
}

export default Countries
