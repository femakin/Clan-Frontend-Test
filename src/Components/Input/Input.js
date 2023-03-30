import React, { useContext } from 'react'
import Button from '../Button/Button'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PersonalInfoContext } from '../context/PersonalInfoContext';
import { StepsContext } from '../context/StepsContext';

function Input() {


    const schema = yup.object().shape({
        name: yup.string().required('This field is required'),
        email: yup.string().email('Invalid email').required('This field is required'),
        phone: yup.string()
            .required('This field is required')
            .matches(/^\+?(234)?\d{10}$/, 'Invalid phone number (must be a Nigerian phone number)'),
    });


    const {

        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        resolver: yupResolver(schema),
    });

    const { personalinfo, setPersonalinfo } = useContext(PersonalInfoContext);
    const { stepIndex, setStepIndex } = useContext(StepsContext);


    const onSubmit = (data) => {
        setPersonalinfo(data)
        setStepIndex(stepIndex + 1)
    };



    return (
        <div className="form-group">

            <form onSubmit={handleSubmit(onSubmit)}>


                <div className="flexError">
                    <p>Name</p>
                    {<span id="errorName">{errors?.name?.message}</span>}
                </div>
                <input
                    type="text"
                    name="name"
                    id="infoName"
                    placeholder="e.g. Stephen king"

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
                    placeholder="e.g. +234 703 95 234 58"
                    {...register("phone")}
                    defaultValue={personalinfo?.phone}
                />
                <Button type="submit" className='buttonContainerStepOne' className2='nextStep' text='Next Step' nextstep={'Next Step'} />
            </form>
        </div>
    )
}

export default Input