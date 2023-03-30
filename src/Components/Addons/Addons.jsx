import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button/Button'
import { AdsonContext } from '../context/Addons'
import { StepsContext } from '../context/StepsContext'
import './Addons.css'

function Addons() {

    const [checkedItems, setCheckedItems] = useState([])
    const [checkedItemsyearly, setCheckedItemsyearly] = useState([])
    const [defaultstate, setdefaultstate] = useState(false)

    const { stepIndex, setStepIndex } = useContext(StepsContext);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const { selectedAdon, setSelectedAdon } = useContext(AdsonContext);


    function handleChange(event) {
        const item = {
            id: event.target.id,
            value: event.target.value,
        };

        if (event.target.checked) {
            setCheckedItems(prevState => [...prevState, item]); // use functional update
            setSelectedAdon(prevState => [...prevState, item])
        } else {
            setCheckedItems(prevState => prevState.filter((x) => x.id !== item.id)); // use functional update
            setSelectedAdon(prevState => prevState.filter((x) => x.id !== item.id))
        }


    }


    function handleChangeyearly(event) {
        const item = {
            id: event.target.id,
            value: event.target.value,
        };

        if (event.target.checked) {
            setCheckedItemsyearly(prevState => [...prevState, item]); // use functional update
        } else {
            setCheckedItemsyearly(prevState => prevState.filter((x) => x.id !== item.id)); // use functional update
        }

        localStorage.setItem('checkedItems', JSON.stringify(checkedItemsyearly)); // update local storage with the correct state
    }



    const monthlydata = [
        {
            tag: <input
                type="checkbox"
                id="onlineMois"
                name="adOnn"
                value="1"
                onChange={handleChange}
                checked={selectedAdon?.map((x => x.value)).includes('1') ? true : false}

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
                checked={selectedAdon?.map((x => x.value)).includes('2') ? true : false}
            />,
            service: 'Larger storage',
            point: '1TB of cloud save',
            rate: '+$2/mo'
        },
        {
            tag: <input
                type="checkbox"
                name="adOnn"
                value="3"
                id="customizableMois"
                onChange={handleChange}
                checked={selectedAdon?.map((x => x.value)).includes('3') ? true : false}
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
        // const storedItems = JSON.parse(localStorage.getItem('checkedItems')) || [];
        // setCheckedItems(storedItems);

        console.log(selectedAdon, 'selectedAdon')
        console.log(selectedAdon.map((x => x.value)))
        console.log(selectedAdon.map((x => x.value)).includes('1'))

    }, [selectedAdon]);



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

        </div>
    )
}

export default Addons