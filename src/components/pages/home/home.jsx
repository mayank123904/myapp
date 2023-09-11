import React, { useEffect, useState } from "react";
import Tabs from "../../compo/tabs";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.css";
function Home() {
  const [donerquant, setDonerquant] = useState(0);

  useEffect(() => {
    // Fetch the products from the server
    axios
      .get("http://localhost:5000/api/v1/doners/alldoners")
      .then((response) => {
        setDonerquant(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching Doners:", error);
      });
  }, []);

  return (
    <div className="homeoc">
      <div className="topcont"></div>
      <div className="registerquant">
        <div className="sparkle">Registered Donors: {donerquant}</div>
      </div>
      <div className="homeic1">
        <div className="donateblood">
        <Link to="/newdoner" style={{textDecoration:"none"}}>
            <span className="db">
           Add Doner
           </span>
          </Link>
           
          
        </div>
        <div className="donateblood">
          <Link to="/donation" style={{textDecoration:"none"}}>
          <span className="db">
           Donate Blood
           </span>
          </Link>
        </div>
        <div className="bloodbank">
        <Link to="/bloodbank" style={{textDecoration:"none"}}>
          <span className="db">
          Blood Bank
           </span>
          </Link>
        </div>
        <div className="requiredblood">
        <Link to="/bloodneed" style={{textDecoration:"none"}}>
          <span className="db">
           Require Blood
           </span>
          </Link>
        </div>
      </div>

      <div className="lad">
        <div className="heading">Compatible Blood Type Donors</div>
        <div className="table">
          <table>
            <tr className="columnheading">
              <th>Blood Type</th>
              <th>Donate Blood To</th>
              <th>Receive Blood From</th>
            </tr>
            <tr>
              <td className="bt">A+</td>
              <td>A+, AB+</td>
              <td>A+, A-, O+, O-</td>
            </tr>
            <tr>
              <td className="bt">O+</td>
              <td>O+, A+, B+, AB+</td>
              <td>O+, O-</td>
            </tr>
            <tr>
              <td className="bt">B+</td>
              <td>B+, AB+</td>
              <td>B+, B-, O+, O-</td>
            </tr>
            <tr>
              <td className="bt">AB+</td>
              <td>AB+</td>
              <td>Everyone</td>
            </tr>
            <tr>
              <td className="bt">A-</td>
              <td>A+, A-, AB+, AB-</td>
              <td>A-, O-</td>
            </tr>
            <tr>
              <td className="bt">O-</td>
              <td>Everyone</td>
              <td>O-</td>
            </tr>
            <tr>
              <td className="bt">B-</td>
              <td>B+, B-, AB+, AB-</td>
              <td>B-, O-</td>
            </tr>
            <tr>
              <td className="bt">AB-</td>
              <td>AB+, AB-</td>
              <td>AB-, A-, B-, O-</td>
            </tr>
          </table>
        </div>
      </div>
      <Tabs />
    </div>
  );
}

export default Home;
