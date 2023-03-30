import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button/Button'
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalInfoContext } from '../context/PersonalInfoContext';
import { StepsContext } from '../context/StepsContext';

function Input({ label, name, type, value, onChange, placeholder }) {

    // const [stepIndex, setStepIndex] = useState(0);

    const schema = yup.object().shape({
        name: yup.string().required('This field is required'),
        email: yup.string().email('Invalid email').required('This field is required'),
        phone: yup.string()
            .required('This field is required').matches(
                /^\d{10}$/,
                'Invalid phone number (must be 10 digits, no dashes or spaces)'
            ),
    });


    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        resolver: yupResolver(schema),
    });

    const {  personalinfo, setPersonalinfo } = useContext(PersonalInfoContext);
    const { stepIndex, setStepIndex } = useContext(StepsContext);


    const onSubmit = (data) => {
        // console.log(data, 'datatat');
        setPersonalinfo(data)
        setStepIndex( stepIndex + 1 )
    };

    useEffect(() => {
    // console.log(personalinfo, 'perinfoooo')
    // console.log()
    }, [personalinfo])




    return (
        <div className="form-group">

            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="flexError">
                    <p>Name</p>
                    { <span id="errorName">{errors?.name?.message}</span> }
                </div>
                <input
                    type="text"
                    name="name"
                    id="infoName"
                    placeholder="e.g. Stephen king"
                    // value={personalinfo?.name}
                    // onChange={handleChange}
                    // ref={register}
                    {...register("name")}
                    defaultValue={personalinfo?.name}
                />


                <div className="flexError">
                    <p>Email Address</p>
                    <span id="errorMail">{errors?.email?.message}</span>
                </div>
                <input
                    type="text"
                    name="email"
                    id="infoMail"
                    placeholder="e.g. stephenking@lorem.com"
                    // ref={register}
                    {...register("email")}
                    defaultValue={personalinfo?.email}
                />


                <div className="flexError">
                    <p>PhoneNumber</p>
                    <span id="errorNum">{errors?.phone?.message}</span>
                </div>
                <input
                    type="text"
                    name="phone"
                    id="infoNumber"
                    placeholder="e.g. +1 234 567 890"
                    // ref={register}
                    {...register("phone")}
                    defaultValue={personalinfo?.phone}
                />


                <Button type="submit"  className='buttonContainerStepOne' className2='nextStep' text='Next Step' nextstep={'Next Step'}    />
            </form>
        </div>
    )
}

export default Input