import React from 'react'
import productData from '../product.json'
import { useParams } from 'react-router-dom'
import { Card,Row,Col,Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Sub_Category.css'
const Sub_Category = () => {
  let value=useParams();
  console.log("UseParams", value);
  let data=productData.Products.find((prod)=>prod.sub_product_id===value.pid);
  console.log("products:", data);


// let data=prodState.products.find((prod)=>prod.id===value.pid);
// console.log("Product:", data);
    return (
        <>
            <div className='Breadcrums'>
    <img src='../../../../img/6.png' className='img-fluid'/>
    </div>
         <Container> 

       
    <Row xs={1} md={4} className="g-4 mt-4">
    {data.sub_product.map((sub_prod)=>{
      return (
<Col key={sub_prod.sub_product_id}>
<Card>
    <Card.Img variant="top" src={sub_prod.sub_image1} /> 
  <Card.Body>
    <Card.Title>{sub_prod.sub_name}</Card.Title>
    <Card.Text>
   
    {sub_prod.sub_price}
    </Card.Text>
    <Button className='view-more'><Link to={`/p_details/${sub_prod.sub_product_id}`}>View Details</Link></Button>
  </Card.Body>
</Card>
</Col>

)
 })}


    </Row>
    </Container> 
        </>
    )
}
export default Sub_Category;

