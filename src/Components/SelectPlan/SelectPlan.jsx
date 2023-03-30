import React, { useContext, useState } from 'react';
import iconarcade from '../../Assets/images/iconarcade.png';
import iconpro from '../../Assets/images/icon-pro.svg';
import iconadvanced from '../../Assets/images/icon-advanced.svg';
import './SelectPlan.css'
import { StepsContext } from '../context/StepsContext';

const monthlyData = [
    {
        id: 'moisArcade',
        image: iconarcade,
        name: 'Arcade',
        price: '9$/mo',

    },
    {
        id: 'moisAdvenced',
        image: iconadvanced,
        name: 'Advanced',
        price: '12$/mo',

    },
    {
        id: 'moisPro',
        image: iconpro,
        name: 'Pro',
        price: '15$/mo',

    }
];


const yearlyData = [
    {
        id: 'moisArcade',
        image: iconarcade,
        name: 'Arcade',
        price: '90$/mo',
        plan: '2 months free'
    },
    {
        id: 'moisAdvenced',
        image: iconadvanced,
        name: 'Advanced',
        price: '120$/mo',
        plan: '2 months free'
    },
    {
        id: 'moisPro',
        image: iconpro,
        name: 'Pro',
        price: '150$/mo',
        plan: '2 months free'
    }
];

function SelectPlan() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const { stepIndex, setStepIndex } = useContext(StepsContext);

    const handleGoBack = () =>{
        setStepIndex(stepIndex - 1)
    }

    const handleNext = () =>{
        setStepIndex(stepIndex + 1)
    }

    return (
        <div>
            {/* SELECT PLAN */}
            <div className="stepPlan" id="stepPlan">
                <h1>Select your plan</h1>
                <p className="descrition">
                    You have the option of monthly or yearly billing.
                </p>



                <div className="planMonth" id="planMonth">
                    {

                        !isChecked ? monthlyData.map((plan) => (
                            <button className="planButton" id={plan?.id} key={plan?.id}>
                                <img src={plan?.image} alt="" />
                                <p>{plan?.name}</p>
                                <span id="priceMonth" className="priceMonth">
                                    {plan?.price}
                                </span>
                                <span id="priceMonth" className="priceMonth">
                                    {plan?.plan}
                                </span>
                            </button>
                        )) :
                            yearlyData?.map((plan) => (
                                <button className="planButton" id={plan?.id} key={plan?.id}>
                                    <img src={plan?.image} alt="" />
                                    <p>{plan?.name}</p>
                                    <span id="priceMonth" className="priceMonth">
                                        {plan?.price}
                                    </span>
                                    <label className="free">
                                        {plan?.plan}
                                    </label>
                                </button>
                            ))

                    }
                </div>






                <div className="switch">
                    <p className="monthly">Monthly</p>
                    <label className="check">
                        <input
                            type="checkbox"
                            id="switch"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span></span>
                    </label>
                    <p className="yearly">Yearly</p>
                </div>

                <div className="buttonContainerStepTwo">
                    <button onClick={handleGoBack}  className="goBack">Go back</button>
                    <button onClick={handleNext} className="nextStep">Next Step</button>
                </div>
            </div>
        </div>
    );
}

export default SelectPlan;
