import React, { useState } from 'react'
import './style.css'

export default function SidetextandIcon({ step_text, main_text, number, style, onClick }) {
    const steps = [
        { stepNumber: "STEP 1", label: "YOUR INFO" },
        { stepNumber: "STEP 2", label: "SELECT PLAN" },
        { stepNumber: "STEP 3", label: "ADD-ONS" },
        { stepNumber: "STEP 4", label: "SUMMARY" }
    ];


    const [activeIndex, setActiveIndex] = useState(0);

    const handleCircleClick = (index) => {
        setActiveIndex(index);
        console.log(index)
    };


    return (
        <div>

            <div className="side_content">
                <div className="circle">

                    {Array.from({ length: 4 }, (_, index) => (
                        <div className={`circle1 ${activeIndex === index ? "circle1-active" : ""}`} key={index} onClick={() => handleCircleClick(index)}>
                            <p>{index + 1}</p>
                        </div>
                    ))}
                </div>
                <div class="steps">
                    {steps.map((step, index) => (
                        <div className={`step${index + 1}`} key={index}>
                            <p>{step.stepNumber}</p>
                            <span>{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

