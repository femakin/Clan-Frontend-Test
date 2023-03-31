import React, { useContext, useEffect} from 'react'
import { AdsonContext } from '../context/Addons'; import { SelectPlanContext } from '../context/SelectPlanContext';
import { StepsContext } from '../context/StepsContext';
import './Summary.css'


function Summary() {

    const { stepIndex, setStepIndex } = useContext(StepsContext);
    const { selectedAdon } = useContext(AdsonContext);
    const { plandetails } = useContext(SelectPlanContext);



    const handleGoBack = () => {
        setStepIndex(stepIndex - 1)
    }

    const handleNext = () => {
        setStepIndex(stepIndex + 1)
    }


    function sumArrayValues(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += parseInt(arr[i].value);
        }
        return sum += parseInt(plandetails?.price);
    }


    // useEffect(() => {
    //     console.log(selectedAdon, 'addonss')
    // }, [])



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
                                <button onClick={() => setStepIndex(1)}   >Change</button>
                            </div>
                            <label htmlFor="" id="priceResume">{plandetails?.price}</label>
                        </div>
                        <br />
                        <span></span>

                        {
                            selectedAdon?.filter((x, i, self) => self.findIndex(y => y?.name === x?.name) === i)
                                .map((x, i) => {
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
                    <p id="modeTotal">Total ({plandetails?.plan?.includes('free') ? 'per year' : 'per month'})</p>
                    <span id="totalPrice"></span>
                    <span className="dollar">{sumArrayValues(selectedAdon)} $</span>
                </div>

                <div className="buttonContainerStepFour">
                    <button onClick={handleGoBack} className="goBack">Go back</button>
                    <button onClick={handleNext} className="nextStep">Confirm</button>
                </div>

            </div>
        </div>
    )
}

export default Summary