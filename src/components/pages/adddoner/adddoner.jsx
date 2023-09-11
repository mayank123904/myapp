import React, { useContext, useState } from 'react'
import "./adddoner.css";
import { Context, server } from '../../../main';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function Doner(){
  const {loading, setLoading} = useContext(Context);
  const [name, setDonorname] = useState("");
  const [mobile, setDonormobile] = useState();
  const [bloodtype, setBloodtype] = useState("");
  const [pincode, setPincode] =  useState("");
  const [area, setArea] = useState("");
  const [city, setCity] =  useState("");
  const [state, setState] =  useState("");
  const handleBloodTypeChange = (event) => {
    setBloodtype(event.target.value);
  };
  const submitHandler=async(e) =>{
    e.preventDefault();
    setLoading(true);

    const newaddress = area + "," + city + "," + state + "," +pincode;
   try {
    const {data} = await axios.post(`${server}/doners/new`,{
       name,
       mobile,
       bloodtype,
       address:newaddress,
      }
      ,{
          headers:{
           "Content-Type":"application/json",
          },
          withCredentials:true,
        }
     );
     toast.success(data.message);
     setLoading(false);
   } catch (error) {
    toast.error(error.response.data.message);
      setLoading(false);
   }
};
  return (
    <div className="newdonor">
      <form onSubmit={submitHandler} className='adddonor'>
      <p>Donor Name</p>
      <input type="text" value={name} onChange={(e)=>setDonorname(e.target.value)} required placeholder='Name' /> <br />
      <p>Donor Mobile Number</p>
      <input type="number" value={mobile} onChange={(e)=>setDonormobile(e.target.value)} required placeholder='Mobile number' /> <br />
      <p>Pin Code</p>
      <input type="text" value={pincode} onChange={(e)=>setPincode(e.target.value)} required placeholder='Pincode' /> <br />
      <p>Area</p>
      <input type="text" value={area} onChange={(e)=>setArea(e.target.value)} required placeholder='Area' /> <br />
      <p>City</p>
      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} required placeholder='City' /> <br />
      <p>State</p>
      <input type="text" value={state} onChange={(e)=>setState(e.target.value)} required placeholder='State' /> <br />
      <p> Doner Blood Type</p>
          <select id="dropdown" onChange={handleBloodTypeChange} value={bloodtype}>
            <option value="AB+">AB+</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB-">AB-</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="O-">O-</option>
          </select>
          <br />
          <button disabled={loading} type="submit">
            Submit
          </button>
      </form>
    </div>
  )
}

export default Doner;