import React, { useContext, useEffect } from 'react'
import Button from '../Button/Button'
import { AdsonContext } from '../context/Addons';
import { PersonalInfoContext } from '../context/PersonalInfoContext';
import { SelectPlanContext } from '../context/SelectPlanContext';
import { StepsContext } from '../context/StepsContext';
import './Summary.css'


function Summary() {

    const { stepIndex, setStepIndex } = useContext(StepsContext);
    const { selectedAdon, setSelectedAdon } = useContext(AdsonContext);
    const { plandetails, setPlandetails, activeStatesplan, setActiveStatesplan, selectedstate, setSelectedstate } = useContext(SelectPlanContext);
    const { personalinfo, setPersonalinfo } = useContext(PersonalInfoContext);


    const handleGoBack = () => {
        setStepIndex(stepIndex - 1)
    }

    const handleNext = () => {
        setStepIndex(stepIndex + 1)
    }


useEffect(() => {
    console.log(personalinfo, 'personalinfo')
    console.log(plandetails, 'plandetails')
    console.log(selectedAdon, 'selectedAdon')
    // console.log(stepIndex, 'stepIndex')
}, [])



    return (
        <div className="stepSummary" id="stepSummary">
            <h1>Finishing up</h1>
            <p className="descrition">
                Double-check everything looks OK before confirming.
            </p>
            <div className="resume">
                <div className="containerResume">
                    <div id="resumeMonth">
                        <div className="flexResume">
                            <div>
                                <h4 id="modeResume">{plandetails?.name} ({plandetails?.plan?.includes('free') ? 'yearly' : 'monthly'})</h4>
                                <button >Change</button>
                            </div>
                            <label htmlFor="" id="priceResume">{plandetails?.price}</label>
                        </div>
                        <br />
                        <span></span>

                        {
                            selectedAdon.map((x, i)=>{
                                return (
                                    <div key={i} className="flexResume">
                                        <p>{x.name}</p>
                                        <label htmlFor="" id="onlinePrice">+{x.value}$</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flexTotal">
                    <p id="modeTotal">Total</p>
                    <span id="totalPrice"></span>
                    <span className="dollar">11 $</span>
                </div>

                <div className="buttonContainerStepFour">
                    <button onClick={handleGoBack} className="goBack">Go back</button>
                    <button onClick={handleNext} className="nextStep">Next Step</button>
                </div>

            </div>
        </div>
    )
}

export default Summary