import React from 'react'
import styled from 'styled-components'

const Title = styled.h1
    `
font-size: 3rem;

`
const Date = styled.div
    `

margin-top: 1%;
font-style: italic;
font-weight: 600;
margin-bottom: 5%;
`

const Img = styled.img

    `
  
width: 70%;
`

const Copyright = styled.div
    `
margin-top: 1%;
font-style: italic;
font-weight: 600;
margin-bottom: 5%;

`

const Explanation = styled.div
    `
margin-top: 1%;
line-height: 2;
padding-bottom: 5%;
font-weight: 600;
font-size: 1rem;
`



export default function DataCard({ cardData }) {



    const img = cardData.hdurl
    console.log(img)
    console.log(cardData)


    return (

        <div>

            <Title>{cardData.title}</Title>
            <Date className="date">Image Date: {cardData.date}</Date>
            <div><Img src={img} /></div>
            <Copyright className="copyright">Photo by {cardData.copyright}. All Rights Reserved.</Copyright>

            <Explanation className="explanation">{cardData.explanation}</Explanation>

        </div>
    );
}

