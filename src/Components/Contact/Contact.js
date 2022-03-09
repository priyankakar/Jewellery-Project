import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import Footer from '../../Footer/Footer'


const ValidateRegForm = (formvalue) => {
    

    const errors ={};
const reg_exp =/^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/
 if(!formvalue.username) {
     errors.name="please enter username";
 }else if(formvalue.username.length<5){
     errors.username="minlength 5";
 }

 if(!formvalue.email) {
    errors.email="please enter email";
}else if(!reg_exp.test(formvalue.email)){
    errors.email="invalid email";
}

 if(!formvalue.message) {
    errors.message="please enter your message";
}else if(formvalue.message.length<5){
    errors.message="minlength 5";
}

console.log("Errors: ", errors);
return errors;

}

const Contact = () => {
   
    const formik=useFormik({
        initialValues:{
            username:'',
            email:'',
            message:''
        },
        validate:ValidateRegForm,
        onSubmit:(values)=> {
            console.log("Received value:", values);
            axios.post('https://jsonplaceholder.typicode.com/users', values)
            .then(res=>{
                console.log("Axios res: ", res);

                alert("registration successfull");
               
            })

            .catch(err=>{
                console.log("Error:", err);
            })
        }});
    return (
        <>
        <div className='Breadcrums'>
        <img src='../../../../img/contact.jpeg' className='img-fluid'/>
        </div>
      

        <Container> 
            <Row>
                <Col><h2 className='sub-headings'>Contact us</h2></Col>
            </Row>
            <Row className='contact-section'>
                <Col>
                <form className='feedback' onSubmit={formik.handleSubmit}>

<label>Name  </label>
  <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
  { formik.touched.username && formik.errors.username ? 
  (<span style={{color:'red'}}>{formik.errors.username}</span>) : null}<br/>

  <label>Email  </label>
  <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
  { formik.touched.email && formik.errors.email ? 
  (<span style={{color:'red'}}>{formik.errors.email}</span>) : null}<br/>

  <label>Message  </label>
  <textarea type="text" name="message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
  { formik.touched.message && formik.errors.message ? 
  (<span style={{color:'red'}}>{formik.errors.message}</span>) : null}<br/>



  <button className='submit' disabled={!(formik.isValid && formik.dirty)} type="submit">Submit</button>

</form>
                </Col>

                <Col className='details'>
                <div className='icon-section'>
                <i className='fa fa-map-marker'></i>
                    <p>San Francisco, CA 94126, USA</p>
                </div>

                <div  className='icon-section'>
                <i className='fa fa-phone'></i>
                    <p><a href='#'>+91 89698 74569</a></p>
                </div>

                <div  className='icon-section'>
                <i className='fa fa-envelope-open-o'></i>
                    <p><a href='#'>domain@gmail.com</a></p>
                </div>

                </Col>
            </Row>
        </Container>

        {<Footer/>}
        </>
    )
};
export default Contact;