import React from 'react';
import './Ticketmaster.css'
import { 
    Button, Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, CardImg, CardGroup } from 'reactstrap'
const EventDisplay = (props) => {
    return(
        <div>
            {props.results.map(result => {
                return (
                    <div key={result.id}>
                    <CardGroup className="cards">
                    <Card className="card" body inverse style={{ backgroundColor: '#333', borderColor: '#333'}}>
                    <CardImg src={result.images[0].url}/> 
                    <CardBody>
                    <CardTitle tag="h3">{result.name}</CardTitle>
                    <CardSubtitle tag="h5">Date: {result.dates.start.localDate}</CardSubtitle>
                    <CardText>{result.info}</CardText>
                    </CardBody>
                    
                    <CardBody>
                    <Button href={result.url} target="_blank">Click for more info</Button>
                    </CardBody>
                    </Card>
                  
                    </CardGroup>

                    </div>
                )
})}
        <div className="buttons">     
            <Button color="success"onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</Button>
            <Button color="info" onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</Button>
        </div>
        </div>
    )
}

export default EventDisplay;