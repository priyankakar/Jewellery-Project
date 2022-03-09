import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card,Row,Col,Button, Container } from 'react-bootstrap'
import './P_Details.css'
import productData from '../product.json'

const P_Details = () => {
   const value=useParams();
console.log(value);
  let prodValue=productData.Products.find((data)=>data.product_name === value.pname)
  console.log("value of Subcategory", prodValue);

  let pDetails= prodValue.sub_product.find((result) => result.sub_product_id === value.sid)
console.log("products", pDetails);
    return (
        <>
  
  <Card>
    <Card.Img variant="top" src={pDetails.sub_image1} /> 
  <Card.Body>
    <Card.Title>{pDetails.sub_name}</Card.Title>
    <Card.Text>
   
    {pDetails.sub_price}
    </Card.Text>
    
  </Card.Body>
</Card>
    </>
    )
}

export default  P_Details;
