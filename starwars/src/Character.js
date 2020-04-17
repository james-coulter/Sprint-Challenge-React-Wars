// Write your Character component here
import React from 'react'
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


const Character = ({name, height, birthYear, mass, hairColor, eyeColor}) => {
    return(

        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <h1 className="name">{name}</h1>
            </div>
            <div className="flip-card-back">
            <h1>{name}</h1> 
            <h5>Birth Year: {birthYear}</h5> 
            <h5>Height: {height}</h5>
            <h5>Mass: {mass}</h5>
            <h5>Hair Color: {hairColor}</h5>
            <h5>Eye Color: {eyeColor}</h5>
            </div>
        </div>
        </div>
    );

}

export default Character