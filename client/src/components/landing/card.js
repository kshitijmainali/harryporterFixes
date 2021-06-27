import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

function CardComponent({ charecters }) {
  return (
    <CardDeck>
      {charecters.map((ch) => (
        <Link to={`/charecter/${ch.key}`} key={uuidv4()}>
          <Card>
            <Card.Img variant='top' src={ch.photo} />
            <Card.Body>
              <Card.Title>{ch.name}</Card.Title>
              <Button> View Detail</Button>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </CardDeck>
  );
}

export default CardComponent;
