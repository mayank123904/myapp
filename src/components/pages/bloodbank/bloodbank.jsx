import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../main';
import "./bloodbank.css";
import bloodbankdata from "./bloodbankdetails.json";

const Bloodbank = () => {
  
  const { loading} = useContext(Context);
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [bankHospital, setBankhospital] = useState(""); 
  const [jsonData, setJsonData] = useState([]);
  const [filteredbloodbanks, setFilteredbloodbanks] =  useState([]);
//   useEffect(() => {
//     // Fetch and parse the JSON data when the component mounts
//     setJsonData(bloodbankdata);
//   }, []);

  useEffect(() => {
    setJsonData(bloodbankdata);
    // const filteredBanks = jsonData.filter((bank) =>
    //   bank.State.toLowerCase() === state.toLowerCase()
    // );
    setFilteredbloodbanks(jsonData);
  }, [state, jsonData]);
  
  return (
    <div className="bbcont">
     <div className="bbsearch">
     {/* <form onSubmit={submitHandler} className="donordetails"> */}
     <form className='searchbloodbank'>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Select State"
            required
          />
          <br />
          <input
            type="text"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            placeholder="Select District"
          />
          <br />
          <input
            type="text"
            value={bankHospital}
            onChange={(e) => setBankhospital(e.target.value)}
            placeholder="Blood Bank or Hospital Name"
          />
          <br />
          <button disabled={loading} type="submit">
            Submit
          </button>
        </form>
        <ul style={{display:"flex",marginTop:"4rem",marginLeft:"-2rem"}}>
        {filteredbloodbanks.map((bank) => (
          <h1 key={bank.id}>{bank.District}</h1>
        ))}
      </ul>
     </div>
    </div>
  )
}

export default Bloodbank