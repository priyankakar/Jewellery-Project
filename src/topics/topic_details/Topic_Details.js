import React from "react"
import topicData from "../topics.json"
import {useParams} from "react-router-dom"


function Topic_Details() {
    const {productId} = useParams()
    const thisProduct = topicData.find(prod => prod.id === productId)
    
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default Topic_Details;