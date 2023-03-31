import React, { useCallback, useContext, useEffect, useState } from 'react'
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


    // function handleChange(event) {
    //     const item = {
    //         id: event.target.id,
    //         value: event.target.value,
    //         name: event.target.name,
    //         checkedTime: new Date().toISOString() // add a new property with the current time
    //     };

    //     if (event.target.checked) {
    //         setCheckedItems(prevState => [...prevState, item]); // use functional update
    //         setSelectedAdon(prevState => [...prevState, item])
    //     } else {
    //         setCheckedItems(prevState => prevState.filter((x) => x.id !== item.id)); // use functional update
    //         setSelectedAdon(prevState => prevState.filter((x) => x.id !== item.id))
    //     }


    // }

    function handleChange(event) {
        const item = {
            id: event.target.id,
            value: event.target.value,
            name: event.target.name,
            checkedTime: new Date().toISOString(),
            placeholder: event.target.placeholder
        };

        if (event.target.checked) {
            // remove any existing item with the same id and keep the most recent one
            setCheckedItems(prevState =>
                [...prevState.filter(x => x?.name !== item?.name), item].sort(
                    (a, b) => new Date(b.checkedTime) - new Date(a.checkedTime)
                )
            );
            setSelectedAdon(prevState =>
                [...prevState.filter(x => x?.name !== item?.name), item].sort(
                    (a, b) => new Date(b.checkedTime) - new Date(a.checkedTime)
                ));
        } else {
            setCheckedItems(prevState => prevState.filter(x => x?.name !== item?.name));
            setSelectedAdon(prevState => prevState.filter(x => x?.name !== item?.name));
        }
    }




    function handleChangeyearly(event) {
        const item = {
            id: event.target.id,
            value: event.target.value,
            name: event.target.name,
            checkedTime: new Date().toISOString(), // add a new property with the current time
            placeholder: event.target.placeholder

        };
        if (event.target.checked) {
            // remove any existing item with the same id and keep the most recent one
            setCheckedItems(prevState =>
                [...prevState.filter(x => x?.name !== item?.name), item].sort(
                    (a, b) => new Date(b.checkedTime) - new Date(a.checkedTime)
                )
            );
            setSelectedAdon(prevState =>
                [...prevState.filter(x => x?.name !== item?.name), item].sort(
                    (a, b) => new Date(b.checkedTime) - new Date(a.checkedTime)
                ));
        }
        else {
            setCheckedItems(prevState => prevState.filter((x) => x?.name !== item?.name)); // use functional update
            setSelectedAdon(prevState => prevState.filter((x) => x?.name !== item?.name))
        }
    }






    const handleGoBack = () => {
        setStepIndex(stepIndex - 1)
    }

    const handleNext = () => {
        // setEmptyarray(false)

        // if (checkedItems.length === 0) {
        //     setEmptyarray(true)
        // } else {
        //     setStepIndex(stepIndex + 1)
        //     setEmptyarray(false)
        // }
        setStepIndex(stepIndex + 1)
        // console.log(selectedAdon, 'selectedAdon')
        // console.log(selectedAdon?.map((x => x.placeholder === 'onlin1')).includes(true), 'ppppp')

    }


    // useEffect(() => {

    // }, [selectedAdon])

    // useCallback(
    //   () => {
    //         console.log(selectedAdon, 'selectedAdon')
    //         console.log(selectedAdon?.filter((x => x.placeholder === 'onlin1')), 'ppppp')
    //   },
    //     [selectedAdon],
    // )



    const monthlydata = [
        {
            tag: <input
                type="checkbox"
                id="onlineMois"
                name="Online service"
                placeholder='onlin1'
                value="1"
                onChange={handleChange}
                checked={selectedAdon?.map((x => x?.placeholder === 'onlin1')).includes(true) ? true : false}

            />,
            service: 'Online service',
            point: 'Access to multiplayer games',
            rate: '+$1/mo'
        },
        {
            tag: <input
                type="checkbox"
                name="Larger storage"
                placeholder='onlin2'
                value="2"
                id="storageMois"
                onChange={handleChange}
                checked={selectedAdon?.map((x => x?.placeholder === 'onlin2')).includes(true) ? true : false}

            />,
            service: 'Larger storage',
            point: '1TB of cloud save',
            rate: '+$2/mo'
        },
        {
            tag: <input
                type="checkbox"
                name="Customizable profile"
                placeholder='onlin3'
                value="3"
                id="customizableMois"
                onChange={handleChange}
                checked={selectedAdon?.map((x => x?.placeholder === 'onlin3')).includes(true) ? true : false}

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
                placeholder='onlin4'
                value="10"
                onChange={handleChangeyearly}
                checked={selectedAdon?.map((x => x?.placeholder === 'onlin4')).includes(true) ? true : false}


            />,
            service: 'Online service',
            point: 'Access to multiplayer games',
            rate: '+$10/yr'
        },
        {
            tag: <input
                type="checkbox"
                name='Larger storage'
                placeholder='onlin5'
                value="20"
                id="storageMois"
                onChange={handleChangeyearly}
                checked={selectedAdon?.map((x => x?.placeholder === 'onlin5')).includes(true) ? true : false}


            />,
            service: 'Larger storage',
            point: '1TB of cloud save',
            rate: '+$20/yr'
        },
        {
            tag: <input
                type="checkbox"
                name='Customizable profile'
                placeholder='onlin6'
                value="30"
                id="customizableMois"
                onChange={handleChangeyearly}
                checked={selectedAdon?.map((x => x?.placeholder === 'onlin6')).includes(true) ? true : false}


            />,
            service: 'Customizable profile',
            point: 'Custom theme on your profile',
            rate: '+$30/yr'
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

        </div>
    )
}

export default Addons