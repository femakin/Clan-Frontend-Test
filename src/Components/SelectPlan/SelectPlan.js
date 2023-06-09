import React, { useContext, useState } from 'react';
import iconarcade from '../../Assets/images/iconarcade.png';
import iconpro from '../../Assets/images/icon-pro.svg';
import iconadvanced from '../../Assets/images/icon-advanced.svg';
import './SelectPlan.css'
import { StepsContext } from '../context/StepsContext';
import { SelectPlanContext } from '../context/SelectPlanContext';

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
        price: '90$/yr',
        plan: '2 months free'
    },
    {
        id: 'moisAdvenced',
        image: iconadvanced,
        name: 'Advanced',
        price: '120$/yr',
        plan: '2 months free'
    },
    {
        id: 'moisPro',
        image: iconpro,
        name: 'Pro',
        price: '150$/yr',
        plan: '2 months free'
    }
];

function SelectPlan() {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [errorstate, setErrorstate] = useState(false)
    const [activeStates, setActiveStates] = useState(Array(3).fill(false));
    const { stepIndex, setStepIndex } = useContext(StepsContext);
    const { setPlandetails, activeStatesplan, setActiveStatesplan, setSelectedstate } = useContext(SelectPlanContext);


    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        setActiveStates(Array(monthlyData.length).fill(false));
        setActiveStatesplan(Array(monthlyData.length).fill(false));
        setSelectedstate(event?.target?.checked);
    };


    const handleGoBack = () => {
        setStepIndex(stepIndex - 1)
    }

    const handleNext = () => {
        setErrorstate(true)
        if (selectedPlan || activeStatesplan.includes(true)) {
            setStepIndex(stepIndex + 1)
            setErrorstate(false)
        }
    }



    const handlePlanSelect = (planIndex, details, isSelected) => {
        setActiveStates(activeStates?.map((_, index) => index === planIndex));
        setPlandetails(details);
        setActiveStatesplan(activeStates?.map((_, index) => index === planIndex));
        setSelectedPlan(true);
        setSelectedstate(isSelected);
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
                    {

                        !isChecked ? monthlyData?.map((plan, i) => (

                            <button
                                className={`${activeStatesplan[i] ? 'activestate' : "planButton"}`}

                                id={plan?.id} key={plan?.id} onClick={() => handlePlanSelect(i, plan, isChecked)}>

                                <img src={plan?.image} alt="" />
                                <p className='nametag'  >{plan?.name}</p>
                                <span id="priceMonth" className="priceMonth">
                                    {plan?.price}
                                </span>
                                <span id="priceMonth" className="priceMonth">
                                    {plan?.plan}
                                </span>
                            </button>
                        )) :
                            yearlyData?.map((plan, i) => (
                                <button className={`${activeStates[i] ? 'activestate' : "planButton"}`} id={plan?.id} key={plan?.id} onClick={() => handlePlanSelect(i, plan, isChecked)} >
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
                    <button onClick={handleGoBack} className="goBack">Go back</button>
                    <button
                        onClick={handleNext}
                        className="nextStep"
                    >
                        Next Step
                    </button>

                </div>
                {
                    errorstate && <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }} ><span style={{
                        fontSize: '12px',
                        color: 'red'
                    }} >Please select your billing plan</span></div>
                }
            </div>
        </div>
    );
}

export default SelectPlan;
