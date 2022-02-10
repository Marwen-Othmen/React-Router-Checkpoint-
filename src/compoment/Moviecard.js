import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Rating } from 'react-simple-star-rating';

const Moviecard = ({title,rate,description,image,id}) => {
  return <div>

<Card style={{ width: '18rem' }}>
  <Card.Img  src={image} />
  <Card.Body>
    <Card.Title>{title} </Card.Title>
    <Card.Text>  {description}  </Card.Text>
    <Card.Text>
      <Rating initialValue={rate} readonly={true}/>
    </Card.Text>
    <LinkContainer  to={`/trailer/${id}`} >
    <Button  >{title} Trailer</Button> 
  </LinkContainer>
  </Card.Body>
  
 
  
</Card>

  </div>;
};

export default Moviecard;
