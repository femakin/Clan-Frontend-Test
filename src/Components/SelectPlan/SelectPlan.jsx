import React from 'react'
import iconarcade from '../../Assets/images/iconarcade.png'
import iconpro from '../../Assets/images/icon-pro.svg'
import iconadvanced from '../../Assets/images/icon-advanced.svg'

function SelectPlan() {
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
                      <p>Arcade</p>
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
              {/* <div className="planMonth" id="planYear">
                  <button className="planButton" id="anneeArcade" >
                      <img src="../../Assets/images/icon-arcade.svg" alt="" />
                      <p>Arcade</p>
                      <span className="priceYear">90$/yr</span>
                      <label className="free">2 months free</label>
                  </button>
                  <button className="planButton" id="anneeAdvenced" >
                      <img src="../../Assets/images/icon-advanced.svg" alt="" />
                      <p>Advenced</p>
                      <span className="priceYear">120$/yr</span>
                      <label className="free">2 months free</label>
                  </button>
                  <button className="planButton" id="anneePro" >
                      <img src="../../Assets/images/icon-pro.svg" alt="" />
                      <p>Pro</p>
                      <span className="priceYear">150$/yr</span>
                      <label className="free">2 months free</label>
                  </button>
              </div> */}
              <div className="switch">
                  <p className="monthly">Monthly</p>
                  <label className="check">
                      <input type="checkbox" id="switch"   />
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