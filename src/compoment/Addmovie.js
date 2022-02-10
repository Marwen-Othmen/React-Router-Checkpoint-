import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

const AddNewMovie = ({ADD}) => {
    const [Newmovie, setNewmovie] = useState({});
  return <div>
<Form >
  <Form.Group className="mb-3">
    <Form.Label> Film Name</Form.Label>
    <Form.Control type="texte" placeholder="Enter title" onChange={(e)=>setNewmovie({...Newmovie,title:e.target.value})}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Description Film </Form.Label>
    <Form.Control type="texte" placeholder="Enter description"  onChange={(e)=>setNewmovie({...Newmovie,description:e.target.value})}/>
    <Form.Label> imageUrl  </Form.Label>
    <Form.Control type="text"  placeholder="Enter image url" onChange={(e)=>setNewmovie({...Newmovie,image:e.target.value})}/>
    <Rating onClick={(rate)=> setNewmovie({...Newmovie,rate:rate/20})  }  />
    
    <br/>
   
  </Form.Group>
  <Form.Label>TrailerURl </Form.Label>
  <Form.Control type="texte" placeholder="Enter Trailer url"onChange={(e)=>setNewmovie({...Newmovie,TrailerUrl:e.target.value})}/>
  <Button onClick={()=>ADD({...Newmovie,id:Math.random()})} variant="primary"> ADD </Button>
</Form>
  </div>;
};

export default AddNewMovie;
