import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"

const url = "https://api.nasa.gov/planetary/apod"
const apiKey = "5QLiZdjGEJNCTMappVfsVecGhN1L5gggWZ4tnrSu"

function App() {

  const [data, setGetData] = useState([])

  useEffect(() => {
    // we put our arbitrary code
    //we weill fetch with axios
    //and set our friends in state (happy path)


    axios.get(`${url}?api_key=${apiKey}`)

      .then(res => {
        console.log(res.data)
        setGetData(res.data) //its an array of freinds
      })
      .catch(err => {
        console.log("not fetching any info")

      })

  }, [])


  const img = data.hdurl

  console.log(img)

  return (
    <div className="App">



      <h1>{data.title}</h1>
      <div className="date">Image Date: {data.date}</div>
      <div><img src={img} /></div>
      <div className="copyright">Photo by {data.copyright}. All Rights Reserved.</div>

      <div className="explanation">{data.explanation}</div>

    </div>
  );
}

export default App;

