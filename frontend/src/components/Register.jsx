import { useState } from 'react';
import axios from 'axios';
import '../css/Register.css';

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [termCheck, setTermCheck] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/register',{firstName:firstName, lastName:lastName, userName:userName, city:city, state:state, zip:zip, termCheck:termCheck}).then(result => console.log(result)).catch(err => console.log(err));
  };

  return (
    <>
      <div className="register">  
        <form onSubmit={handleSubmit}>
          <h1>User Registration</h1>
          <label htmlFor="firstName">
            <h2>First Name : </h2>
            <input type="text" placeholder='first name' name='firstName' onChange={(e)=>setFirstName(e.target.value)} value={firstName} required/>
          </label><br />
          <label htmlFor="lastName">
            <h2>Last Name : </h2>
            <input type="text" name='lastName' placeholder='last name'  onChange={(e)=>setLastName(e.target.value)} value={lastName} required/>
          </label><br />
          <label htmlFor="userName">
            <h2>User Name : </h2>
            <input type="text" name='userName' placeholder='user name' onChange={(e)=>setUserName(e.target.value)} value={userName} required/>
          </label><br />
          <label htmlFor="city">
            <h2>City : </h2>
            <input type="text" name='city' placeholder='city' onChange={(e)=>setCity(e.target.value)} value={city} required/>
          </label><br />
          <label htmlFor="state">
            <h2>State : </h2>
            <input type="text" name='state' placeholder='State' onChange={(e)=>setState(e.target.value)} value={state} required/>
          </label><br />
          <label htmlFor="zip">
            <h2>ZIP : </h2>
            <input type="text" placeholder='ZIP' name='zip' onChange={(e)=>setZip(e.target.value)} value={zip} required/>
          </label><br />
          <label htmlFor="termCheck" className='termCheck'>
            <input type='checkbox' name='termCheck' onChange={()=>setTermCheck(termCheck ? false : true)} value={termCheck} required/>
            <h2>Terms & Condition</h2>
          </label><br />
          <button>Submit</button>
        </form>
      </div>  
    </>
  );
}

export default Register;
