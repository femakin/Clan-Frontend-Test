import React from 'react'
import Button from '../Button/Button'
import './Summary.css'

function Summary() {
    return (
        <div className="stepSummary" id="stepSummary">
            <h1>Finishing up</h1>
            <p className="descrition">
                Double-check everything looks OK before confirming.
            </p>
            <div className="resume">
                <div className="containerResume">
                    <div id="resumeMonth">
                        <div className="flexResume">
                            <div>
                                <h4 id="modeResume">Arcade (monthly)</h4>
                                <button >Change</button>
                            </div>
                            <label htmlFor="" id="priceResume">9$/mo</label>
                        </div>
                        <br />
                        <span></span>
                        <div className="flexResume">
                            <p>Online service</p>
                            <label htmlFor="" id="onlinePrice">+0$</label>
                        </div>
                        <div className="flexResume">
                            <p>Larger storage</p>
                            <label htmlFor="" id="storagePrice">+0$</label>
                        </div>
                        <div className="flexResume">
                            <p>Customizable profile</p>
                            <label htmlFor="" id="customizablePrice">+0$</label>
                        </div>
                    </div>
                </div>
                <div className="flexTotal">
                    <p id="modeTotal">Total</p>
                    <span id="totalPrice"></span>
                    <span className="dollar">11 $</span>
                </div>

                <Button backtext='Go back' nextstep={'Confirm'} className='buttonContainerStepFour' />

            </div>
        </div>
    )
}

export default Summary