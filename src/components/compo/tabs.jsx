import React, { useState } from 'react'

function Tabs(){

  const [activeTab,setActive] = useState("wholeblood")

  const openTab = (tab) => {
    setActive(tab);
  };

  return (
    <div>
        <button
         className={`tablink ${activeTab === 'wholeblood' ? 'active' : ''}`}
         onClick={() => openTab('wholeblood')}
        >Whole Blood</button>
        <button
         className={`tablink ${activeTab === 'plasma' ? 'active' : ''}`}
         onClick={() => openTab('plasma')}
        >Plasma</button>
        <button 
         className={`tablink ${activeTab === 'platelet' ? 'active' : ''}`}
         onClick={() => openTab('platelet')}
        >Platelet</button>
        <div 
        id="wholeblood"
        className={`tabcontent ${activeTab === 'wholeblood' ? 'active' : ''}`}
        >
          <div className="wb1">
            <span>
            <h3>What is it?</h3>
           <p>Blood Collected straight from the donor after its donation usually separated into red blood cells, platelets, and plasma.</p>
            </span>
            <span>
            <h3>Who can donate?</h3>
           <p>You need to be 18-65 years old, weigh 45kg or more and be fit and healthy.</p>  
            </span>
          </div>
          <div className="wb2">
            <span>
                <h3>
                    Used For?
                </h3>
                <p> Stomach disease, kidney disease, childbirth, operations, blood loss, trauma, cancer, blood diseases, haemophilia, anemia, heart disease.</p>
            </span>
            <span>
                <h3>Lasts For?</h3>
                <p>
                Red cells can be stored for 42 days. 
                </p>
            </span>
          </div>  
          <div className="wb3">
            <span>
                <h3>
                How long does it take? 
                </h3>
                <p>
                15 minutes to donate. 
                </p>
            </span>
            <span>
                <h3>
                How often can I donate? 
                </h3>
                <p>
                Every 12 weeks 
                </p>
            </span>
          </div>
        </div>
        <div 
         id="plasma"
         className={`tabcontent ${activeTab === 'plasma' ? 'active' : ''}`}
        >
          <div className="pm1">
            <span>
            <h3>What is it?</h3>
           <p>The straw-coloured liquid in which red blood cells, white blood cells, and platelets float in.Contains special nutrients which can be used to create 18 different type of medical products to treat many different medical conditions.</p>
            </span>
            <span>
            <h3>Who can donate?</h3>
           <p>You need to be 18-70 (men) or 20-70 (women) years old, weigh 50kg or more and must have given successful whole blood donation in last two years.</p>  
            </span>
          </div>
          <div className="pm2">
            <span>
                <h3>
                    Used For?
                </h3>
                <p> Immune system conditions, pregnancy (including anti-D injections), bleeding, shock, burns, muscle and nerve conditions, haemophilia, immunisations.</p>
            </span>
            <span>
                <h3>Lasts For?</h3>
                <p>
                Plasma can last up to one year when frozen.
                </p>
            </span>
          </div>  
          <div className="pm3">
            <span>
                <h3>How does it work?</h3>
                <p>We collect your blood, keep plasma and return rest to you by apheresis donation.</p>
            </span>
            <span>
                <h3>
                How long does it take? 
                </h3>
                <p>
                15 minutes to donate. 
                </p>
            </span>
            <span>
                <h3>
                How often can I donate? 
                </h3>
                <p>
                Every 2-3 weeks 
                </p>
            </span>
          </div>
        </div>

        <div
         id="platelet"
         className={`tabcontent ${activeTab === 'platelet' ? 'active' : ''}`}
         >
          <div className="pt1">
            <span>
            <h3>What is it?</h3>
           <p>The tiny 'plates' in blood that wedge together to help to clot and reduce bleeding. Always in high demand, Vital for people with low platelet count, like malaria and cancer patients.</p>
            </span>
            <span>
            <h3>Who can donate?</h3>
           <p>You need to be 18-70 years old (men), weigh 50kg or more and have given a successful plasma donation in the past 12 months.</p>  
            </span>
          </div>
          <div className="pt2">
            <span>
                <h3>
                    Used For?
                </h3>
                <p> Cancer, blood diseases, haemophilia, anaemia, heart disease, stomach disease, kidney disease, childbirth, operations, blood loss, trauma, burns.</p>
            </span>
            <span>
                <h3>Lasts For?</h3>
                <p>
                just five days..
                </p>
            </span>
          </div>  
          <div className="pt3">
            <span>
                <h3>How does it work?</h3>
                <p>We collect your blood, keep platelet and return rest to you by apheresis donation.</p>
            </span>
            <span>
                <h3>
                How long does it take? 
                </h3>
                <p>
                45 minutes to donate. 
                </p>
            </span>
            <span>
                <h3>
                How often can I donate? 
                </h3>
                <p>
                Every 2 weeks 
                </p>
            </span>
          </div>
        </div>
    </div>
  )
}

export default Tabs