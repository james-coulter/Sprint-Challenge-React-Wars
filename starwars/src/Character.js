// Write your Character component here
import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


const Character = ({name, height, birthYear}) => {
    return(
    <div className="card">
        <h1 className="name">{name}</h1>
        <h3 className="sub">{birthYear}</h3>
        <h3 className="sub">{height}</h3>
    </div>
    );

}

export default Character