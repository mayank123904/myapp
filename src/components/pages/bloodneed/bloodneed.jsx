import React, {useContext, useState } from 'react';
import axios from 'axios';
import Profilecard from '../../compo/profilecard/profilecard';
import { Context } from '../../../main';
import "./bloodneed.css";

const Finddonors = () => {
  const { loading} = useContext(Context);
  const [doners, setDoners] = useState([]);
  const [bloodtype, setBloodtype] =  useState("");
  const [donorcity, setDonorcity] =  useState("");
  const [donorarea, setDonorarea] =  useState("");
  const handleBloodTypeChange = (event) => {
    setBloodtype(event.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    axios
    .get('http://localhost:5000/api/v1/doners/alldoners')
    .then((response) => {
      setDoners(response.data);
    })
    .catch((error) => {
      console.error('Error fetching Doners:', error);
    });
  };
  const filteredDoners = doners.filter((doner) => {
    const bloodTypeMatch = doner.bloodtype === bloodtype;
    const cityMatch = donorcity.toLowerCase() === '' || donorcity.toLowerCase() === doner.address.split(',')[1].trim().toLowerCase();
    const areaMatch = donorarea.toLowerCase() === '' || donorarea.toLowerCase() === doner.address.split(',')[0].trim().toLowerCase();
  
    return bloodTypeMatch && cityMatch && areaMatch;
  });
  return (
    <div className='bestsellercontainer'>
      <form onSubmit={submitHandler} className="donordetails">
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
          <p>Area, Street, Sector, Village</p>
          <input
            type="text"
            value={donorarea}
            onChange={(e) => setDonorarea(e.target.value)}
            placeholder="Apartment / Road / Area"
          />
          <br />
          <p>Town/City</p>
          <input
            type="text"
            value={donorcity}
            onChange={(e) => setDonorcity(e.target.value)}
          />
          <br />
          <button disabled={loading} type="submit">
            Submit
          </button>
        </form>
      <ul style={{width:"25rem",border:"1px solid black",margin:"auto"}}>
        {filteredDoners.map((doner) => (
         <span>
            <Profilecard bloodtype={doner.bloodtype} donorname={doner.name} donormobile={doner.mobile}/>
          </span>
        ))}
      </ul> 
      {/* <div className="featuredproducts">
        <ProductList />
      </div> */}
    </div>
  );
};

export default Finddonors;