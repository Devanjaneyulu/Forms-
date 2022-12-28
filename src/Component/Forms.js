import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FieldReq from './FieldReq';


const Forms=() => {
  const [values,setValues] = useState({
    firstName:"",
    lastName:"",
    businessemail:"",
    companyName:"",
    jobTitle:"",
    country:"",
    phonenumber:""

  })

const inputs=[
  {id:1,
  label:"First Name" ,
  name:"firstName",
  fieldtype:"text"
},
{id:2,
  label:"Last Name" ,
  name:"lastName",
  fieldtype:"text"
},
{id:3,
  label:"Business Email" ,
  name:"emailId",
  fieldtype:"email"
},
{id:4,
  label:"Company Name" ,
  name:"companyName",
  fieldtype:"text"
},
{id:5,
  label:"Job Title" ,
  name:"jobTitle",
  fieldtype:"text"
},
{id:6,
  label:"Country" ,
  name:"Countryname",
  fieldtype:"text",
},

{id:7,
  label:"Phone Number",
  name:"phoneNumber",
  fieldtype:"number"
}
]




const usernameRef = React.useRef()
// console.log(username)

const handleSubmit=(e)=>{
  e.preventDefault()
  const data =new FormData(e.target)
console.log(Object.fromEntries(data.entries()))
}

const handleChange=(e)=>{
setValues({...values,[e.target.name]:e.target.value})
}
    return (

<Form onSubmit={handleSubmit}>
{inputs.map((input)=>
<FieldReq  key={input.id} {...input} value={values[input.name]} handleChange={handleChange}/>)}


{/* <FieldReq label="First Name " fieldtype="text"
// refer={usernameRef}
//  setUsername={setUsername}
 />
<FieldReq label="Last Name"  fieldtype="text"/>
<FieldReq label="Business Email" fieldtype="email"/>
<FieldReq label="Company Name" fieldtype="text"/>
<FieldReq label="Job Title" fieldtype="text"/>
<FieldReq label="Country" fieldtype="text"/>
<FieldReq label="Phone Number" fieldtype="number"/> */}
<Button variant="primary" type="submit"> Submit </Button>

</Form>

    );

}

export default Forms
