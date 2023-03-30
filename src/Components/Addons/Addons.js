import React, { useContext, useState } from 'react'
import { AdsonContext } from '../context/Addons'
import { SelectPlanContext } from '../context/SelectPlanContext'
import { StepsContext } from '../context/StepsContext'
import './Addons.css'

function Addons() {

    const [checkedItems, setCheckedItems] = useState([])
    const [CheckedItemsyearly, setCheckedItemsyearly] = useState([])


    const { stepIndex, setStepIndex } = useContext(StepsContext);
    const { selectedAdon, setSelectedAdon } = useContext(AdsonContext);
    const [emptyarray, setEmptyarray] = useState(false)
    const { selectedstate } = useContext(SelectPlanContext);


    function handleChange(event) {
        const item = {
            id: event.target.id,
            value: event.target.value,
            name: event.target.name
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
            name: event.target.name
        };

        if (event.target.checked) {
            setCheckedItemsyearly(prevState => [...prevState, item]); // use functional update
        } else {
            setCheckedItemsyearly(prevState => prevState.filter((x) => x.id !== item.id)); // use functional update
        }

    }

    const handleGoBack = () => {
        setStepIndex(stepIndex - 1)
    }

    const handleNext = () => {
        setEmptyarray(false)

        if (checkedItems.length === 0) {
            setEmptyarray(true)
        } else {
            setStepIndex(stepIndex + 1)
            setEmptyarray(false)
        }

    }

    const monthlydata = [
        {
            tag: <input
                type="checkbox"
                id="onlineMois"
                name="Online service"
                value="1"
                onChange={handleChange}
                checked={selectedAdon?.map((x => x.value)).includes('1') || selectedAdon?.map((x => x.value)).includes('10') ? true : false}

            />,
            service: 'Online service',
            point: 'Access to multiplayer games',
            rate: '+$1/mo'
        },
        {
            tag: <input
                type="checkbox"
                name="Larger storage"
                value="2"
                id="storageMois"
                onChange={handleChange}
                checked={selectedAdon?.map((x => x.value)).includes('2') || selectedAdon?.map((x => x.value)).includes('20') ? true : false}
            />,
            service: 'Larger storage',
            point: '1TB of cloud save',
            rate: '+$2/mo'
        },
        {
            tag: <input
                type="checkbox"
                name="Customizable profile"
                value="3"
                id="customizableMois"
                onChange={handleChange}
                checked={selectedAdon?.map((x => x.value)).includes('3') || selectedAdon?.map((x => x.value)).includes('30') ? true : false}
            />,
            service: 'Customizable profile',
            point: 'Custom theme on your profile',
            rate: '+$3/mo'
        },

    ]

    const yearlydata = [
        {
            tag: <input
                type="checkbox"
                id="onlineMois"
                name='Online service'
                value="10"
                onChange={handleChangeyearly}
            />,
            service: 'Online service',
            point: 'Access to multiplayer games',
            rate: '+$10/yr'
        },
        {
            tag: <input
                type="checkbox"
                name='Larger storage'
                value="20"
                id="storageMois"
                onChange={handleChangeyearly}
            />,
            service: 'Larger storage',
            point: '1TB of cloud save',
            rate: '+$20/yr'
        },
        {
            tag: <input
                type="checkbox"
                name='Customizable profile'
                value="20"
                id="customizableMois"
                onChange={handleChangeyearly}
            />,
            service: 'Customizable profile',
            point: 'Custom theme on your profile',
            rate: '+$20/yr'
        },

    ]




    return (
        <div className="stepAddOn" id="stepAddOn">
            <h1>Pick add-ons</h1>
            <p className="descrition">
                Add-ons help enhance your gaming experience.
            </p>

            {
                !selectedstate ? monthlydata?.map((x, i) => {
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
            {
                emptyarray && <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'red',
                    fontSize: '12px'
                }}  >Please, select one add-on</div>
            }
        </div>
    )
}

export default Addons