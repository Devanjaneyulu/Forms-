import React from 'react'
import Form from 'react-bootstrap/Form';

const FieldReq = (props) => {

    
  return (
    <>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{props.label}</Form.Label>
    <Form.Control placeholder={props.label} name={props.label} type={props.fieldtype}
    ref={props.refer} onChange={props.handleChange}
    //  onChange = {e => props.setUsername(e.target.value)} 
     />


    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
  </>
  )
}

export default FieldReq
