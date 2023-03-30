import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button/Button'
import { StepsContext } from '../context/StepsContext'
import './Addons.css'

function Addons() {

    const [checkedItems, setCheckedItems] = useState([])
    const [checkedItemsyearly, setCheckedItemsyearly] = useState([])
    const [defaultstate, setdefaultstate] = useState(false)
    const [errorstate, setErrorstate] = useState(false)


    const handleStateChange = () => {
        setdefaultstate(!defaultstate)
    }

    function handleChange(event) {
        const item = {
            id: event.target.id,
            value: event.target.value,
        };

        if (event.target.checked) {
            setCheckedItems([...checkedItems, item]);
        } else {
            setCheckedItems(checkedItems.filter((x) => x.id !== item.id));
        }
    }

    function handleChangeyearly(event) {
        const item = {
            id: event.target.id,
            value: event.target.value,
        };

        if (event.target.checked) {
            setCheckedItemsyearly([...checkedItemsyearly, item]);
        } else {
            setCheckedItemsyearly(checkedItemsyearly.filter((x) => x.id !== item.id));
        }
    }

    const monthlydata = [
        {
            tag: <input
                type="checkbox"
                id="onlineMois"
                name="adOnn"
                value="1"
                onChange={handleChange}
            />,
            service: 'Online service',
            point: 'Access to multiplayer games',
            rate: '+$1/mo'
        },
        {
            tag: <input
                type="checkbox"
                name="adOnn"
                value="2"
                id="storageMois"
                onChange={handleChange}
            />,
            service: 'Larger storage',
            point: '1TB of cloud save',
            rate: '+$2/mo'
        },
        {
            tag: <input
                type="checkbox"
                name="adOnn"
                value="2"
                id="customizableMois"
                onChange={handleChange}
            />,
            service: 'Customizable profile',
            point: 'Custom theme on your profile',
            rate: '+$2/mo'
        },

    ]

    const yearlydata = [
        {
            tag: <input
                type="checkbox"
                id="onlineMois"
                name="adOnn"
                value="1"
                onChange={handleChangeyearly}
            />,
            service: 'Online service',
            point: 'Access to multiplayer games',
            rate: '+$10/yr'
        },
        {
            tag: <input
                type="checkbox"
                name="adOnn"
                value="2"
                id="storageMois"
                onChange={handleChange}
            />,
            service: 'Larger storage',
            point: '1TB of cloud save',
            rate: '+$20/yr'
        },
        {
            tag: <input
                type="checkbox"
                name="adOnn"
                value="2"
                id="customizableMois"
                onChange={handleChange}
            />,
            service: 'Customizable profile',
            point: 'Custom theme on your profile',
            rate: '+$20/yr'
        },

    ]



    useEffect(() => {
        // console.log('Checked Items:', checkedItems);
        // console.log('Checked Items:', checkedItemsyearly);
    }, [checkedItems, checkedItemsyearly]);

    const { stepIndex, setStepIndex } = useContext(StepsContext);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (planId) => {
        setSelectedPlan(planId);
    }

    const handleGoBack = () => {
        setStepIndex(stepIndex - 1)
    }

    const handleNext = () => {
        if (selectedPlan) {
            setStepIndex(stepIndex + 1)
        }
    }
    return (
        <div className="stepAddOn" id="stepAddOn">
            <h1>Pick add-ons</h1>
            <p className="descrition">
                Add-ons help enhance your gaming experience.
            </p>

            {
                !defaultstate ? monthlydata?.map((x, i) => {
                    return (
                        <div id="addonMois" key={i} >
                            <div className="addOnButton">
                                <div className="regroup">

                                    {x.tag}


                                    <div className="addOn">
                                        <p className="AddSize">{x.service}</p>
                                        <span>{x.point}</span>
                                    </div>
                                </div>
                                <p className="prix">{x.rate}</p>
                            </div>


                        </div>
                    )
                }) :

                    yearlydata?.map((x, i) => {
                        return (
                            <div id="addonMois" key={i} >
                                <div className="addOnButton">
                                    <div className="regroup">

                                        {x.tag}


                                        <div className="addOn">
                                            <p className="AddSize">{x.service}</p>
                                            <span>{x.point}</span>
                                        </div>
                                    </div>
                                    <p className="prix">{x.rate}</p>
                                </div>


                            </div>
                        )
                    })
            }
            <div className="buttonContainerStepThree">
                <button onClick={handleGoBack} className="goBack">Go back</button>
                <button onClick={handleNext} className="nextStep">Next Step</button>
            </div>

            {/* <Button backtext='Go back' nextstep={'Next Step'} className='buttonContainerStepThree' /> */}
        </div>
    )
}

export default Addons