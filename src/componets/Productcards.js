import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Productcards(props) {
  return (
    
    <Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} className="product-image"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.price}
        <br></br>
        {props.rating}
       </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </Col>

  );
}

export default Productcards;