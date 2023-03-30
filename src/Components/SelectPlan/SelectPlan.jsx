import React, { useState } from 'react'
import iconarcade from '../../Assets/images/iconarcade.png'
import iconpro from '../../Assets/images/icon-pro.svg'
import iconadvanced from '../../Assets/images/icon-advanced.svg'

function SelectPlan() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log(event.target.checked)
        console.log(isChecked)
    };
  return (
    <div>

          {/* SELECT PLAN */}
          <div className="stepPlan" id="stepPlan">
              <h1>Select your plan</h1>
              <p className="descrition">
                  You have the option of monthly or yearly billing.
              </p>
              <div className="planMonth" id="planMonth">
                  <button className="planButton" id="moisArcade" >
                      <img src={iconarcade} alt="" />

                      <span id="priceMonth" className="priceMonth">9$/mo</span>
                  </button>


                  <button className="planButton" id="moisAdvenced" >
                      <img src={iconadvanced} alt="" />

                      <p>Advenced</p>
                      <span id="priceMonth" className="priceMonth">12$/mo</span>
                  </button>


                  <button className="planButton" id="moisPro" >
                      <img src={iconpro} alt="" />
                      <p>Pro</p>
                      <span id="priceMonth" className="priceMonth">15$/mo</span>
                  </button>

              </div>

              <div className="switch">
                  <p className="monthly">Monthly</p>
                  <label className="check">
                      <input type="checkbox" id="switch" checked={isChecked}
                          onChange={handleCheckboxChange}   />
                      <span></span>
                  </label>
                  <p className="yearly">Yearly</p>
              </div>
              <div className="buttonContainerStepTwo">
                  <button  className="goBack">Go back</button>
                  <button  className="nextStep">Next Step</button>
              </div>
          </div>




    </div>
  )
}

export default SelectPlan