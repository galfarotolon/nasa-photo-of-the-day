import React from 'react'

export default function DataCard({ cardData }) {


    const img = cardData.hdurl

    console.log(img)

    console.log(cardData)

    return (


        <div>
            <h1>{cardData.title}</h1>
            <div className="date">Image Date: {cardData.date}</div>
            <div><img src={img} /></div>
            <div className="copyright">Photo by {cardData.copyright}. All Rights Reserved.</div>

            <div className="explanation">{cardData.explanation}</div>

        </div>
    );
}

