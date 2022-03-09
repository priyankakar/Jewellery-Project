import React from 'react'
import './Sub_topic_Category.css'
import topicData from '../topics.json'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Card,Row,Col,Button, Container, } from 'react-bootstrap'


   const Sub_topic_Category = () => {
        let value=useParams();
        console.log("UseParams", value);
        let data=topicData.topics.find((prod)=>prod.sub_topic_id===value.pid);
        console.log("Topics:", data);
    return (
        <>
            <Container>   
    <Row xs={1} md={3} className="g-4 mt-4">
    {data.sub_topic.map((sub_topic)=>

<Col key={sub_topic.sub_topic_id}>
<Card>
  <Card.Img variant="top" className="img" src={sub_topic.sub_image1}/>
  <Card.Body>
    <Card.Title>{sub_topic.sub_name}</Card.Title>
    <Card.Text>
    {sub_topic.sub_description}
    
    </Card.Text>
    <Button variant="primary"><Link to={`/topic_details/${data.topic_id}`}>View Details</Link></Button>
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

export default Sub_topic_Category;
