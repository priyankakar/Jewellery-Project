import React from 'react'
import { Carousel,Row,Col,Card,Container} from 'react-bootstrap'
import productData from '../../product.json'
import { useParams } from 'react-router-dom'
import './Home.css'
import Footer from '../../Footer/Footer'



  const Home = () => {
    let value=useParams();
    console.log("UseParams", value);
    let data=productData.Products.find((prod)=>prod.sub_product_id===value.pid);
    console.log("products:", data);
  return (
    <>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../img/banner.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='heading-banner'>See Our Exclusive Collections</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../img/banner2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 className='heading-banner'>See Our Exclusive Collections</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../img/banner3.jpeg"
      alt="Third slide"
    />

   
  </Carousel.Item>
</Carousel>

<Container>
<Row className="mt-5">
    <Col>
    <img className='img-fluid' src='../../../../img/b1.jpeg'/>
    </Col>

    <Col>
    <img className='img-fluid' src='../../../../img/b2.jpeg'/>
    </Col>
    </Row>
</Container>


<Container>
  <Row>
    <Col> <h2 className='sub-headings'>Best Sellers</h2>
    </Col>
   
  </Row>
<Row xs={1} md={4} className="g-4 mt-2">
  {data.sub_product.map((sub_product) => (
    <Col  key={sub_product.sub_product_id}>
      <Card>
        <Card.Img variant="top" src={sub_product.sub_image1} />
        <Card.Body>
          <Card.Title>{sub_product.sub_name}</Card.Title>
          <Card.Title><h3 className='price'>{sub_product.sub_price}</h3></Card.Title>
          <Card.Text>
          {sub_product.sub_description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</Container>





<Container>
<Row className="mt-2">
    <Col> <h2 className='sub-headings'>Wedding Collections</h2>
    </Col>
   
  </Row>
<Row className="mt-4">
    <Col>
    <img className='img-fluid' src='../../../../img/about-video.png'/>
    </Col>
    </Row>
</Container>


{<Footer/>}




    </>
  )
}

export default Home;