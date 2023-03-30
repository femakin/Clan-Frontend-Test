import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './PersonalInfo.css'


function PersonalInfo() {
    return (

        <div className="stepInfo" id="stepInfo">
            <h1>Personal Info</h1>
            <p className="descrition">
                Please provide vour name, email address, and phone number.
            </p>

            <Input />
            <Button className='buttonContainerStepOne' className2='nextStep' text='Next Step' nextstep={'Next Step'} />
        </div>

    )
}

export default PersonalInfo


