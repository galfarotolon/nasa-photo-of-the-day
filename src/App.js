import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import DataCard from "./dataCard.js"
import styled from 'styled-components'


const url = "https://api.nasa.gov/planetary/apod"
const apiKey = "5QLiZdjGEJNCTMappVfsVecGhN1L5gggWZ4tnrSu"



function App() {

  const [data, setGetData] = useState([])

  useEffect(() => {

    axios.get(`${url}?api_key=${apiKey}`)



      .then(res => {

        setGetData(res.data)
        console.log(res.data)

      })
      .catch(err => {
        console.log("not fetching any info")

      })

  }, [])

  return (
    <div className="App">
      <DataCard cardData={data} />
    </div>

  );
}
export default App;

