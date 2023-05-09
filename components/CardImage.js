import React from 'react'
import { Card } from 'react-bootstrap'

const CardImage = (props) => {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.CardImage??"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfK9c4xhElB9hAYyQ_tKww1IZO1A0iX2Yrw&usqp=CAU"}/>
                <Card.Body>
                    <Card.Title>{props.title??"Text not found"}</Card.Title>
                    {props.primaryText &&
                        <Card.Text>
                            {props.primaryText}
                        </Card.Text>
                    }
                </Card.Body>
            </Card>
        </>
    )
}

export default CardImage