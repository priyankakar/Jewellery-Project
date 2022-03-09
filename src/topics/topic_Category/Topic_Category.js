import React from 'react'
import './Topic_category.css'
import topicData from '../topics.json'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function Topic_Category() {
    return (
        <>
            <h1 className='heading'>Different Topics</h1>
      
            <ul>
        {
                topicData.topics.map((prod)=>
                <li key={prod.topic_id}>{prod.topic_name} <br/>
                 <Button className='mybtn'><Link to={`/sub_topic/${prod.topic_id}`}>Go to Sub Category</Link></Button>
                </li>
               
                )
            }
        </ul>
           
        </>
    )
}
