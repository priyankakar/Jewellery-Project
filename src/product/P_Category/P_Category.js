import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Container,Row,Col,Card } from 'react-bootstrap'
import './P_Category.css'
import productData from '../product.json'

export default function P_Category() {


    return (
        <>
           
            <div className='Breadcrums'>
    <img src='../../../../img/6.png' className='img-fluid'/>
    </div>

        <Container>
        <Row>
                <Col><h2 className='sub-headings'>Products</h2></Col>
            </Row>
            <Row xs={1} md={4} className="g-4 mt-4">
                {
               productData.Products.map((prod) =>
                <Col key={prod.product_id}>
                <Card>
  <Card.Img variant="top" className="img" src={prod.product_img}/>
  <Card.Body>
    <Card.Title className='title'>{prod.product_name}</Card.Title>
   
    <Button className='view-more'>
<Link to={`/sub_category/${prod.sub_product_id}`}>View More</Link></Button>
  </Card.Body>
</Card>
                </Col>
                )
                    
                }


            </Row>
            </Container>
        
           
        </>
    )
}
