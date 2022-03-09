import React from 'react'
import { Row,Col,Container} from 'react-bootstrap'
import './About.css'
import Footer from '../../Footer/Footer'

export default function About() {
  return (
    <>
    <div className='Breadcrums'>
    <img src='../../../../img/6.png' className='img-fluid'/>
    </div>

    <Container>
<Row className="mt-5">
    <Col md={4}>
    <img className='img-fluid' src='../../../../img/about1.png'/>
    </Col>

    <Col md={8}>
      <div className='about-us pl-5'>
      <h2>About us</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     
      </div>
 
    </Col>
    </Row>

    <Row className="mt-5">
   

    <Col md={8}>
      <div className='about-us pr-5'>
      <h2>Our History</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     
      </div>
 
    </Col>

    <Col md={4}>
    <img className='img-fluid' src='../../../../img/about2.png'/>
    </Col>
    </Row>
</Container>

{<Footer/>}
    </>


  )
}
