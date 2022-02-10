import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Trailer = ({data}) => {
    const {idtrailer}=useParams()
    const navigate = useNavigate()
    const watchTrailer=data.find(el=>el.id==idtrailer)
  return (
    <div>
<Card className="text-center">
      <Card.Title>{watchTrailer.title}</Card.Title>
  <Card.Body>
  <Card.Text>{watchTrailer.description}</Card.Text>
  
    <div  >
      <iframe width={1280} height={620} src={watchTrailer.trailer} >
      </iframe>
      </div>
 </Card.Body>
</Card>
<button onClick={()=>navigate('/')}> Go Back Home  </button>




    </div>
  )
}

export default Trailer