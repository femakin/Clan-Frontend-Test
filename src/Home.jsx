import React, { useContext } from 'react'
import Addons from './Components/Addons/Addons'
import { StepsContext } from './Components/context/StepsContext'
import PersonalInfo from './Components/PersonalInfo/PersonalInfo'
import SelectPlan from './Components/SelectPlan/SelectPlan'
import SidetextandIcon from './Components/SideMenuText/SidetextandIcon'
import Summary from './Components/Summary/Summary'
import Thankyou from './Components/ThankyouPage/Thankyou'

function Home() {
    const { stepIndex, setStepIndex } = useContext(StepsContext);
    return (
        <div className='main_conatiner' >

            <div className="home_container">

                <aside className='aside_container' >

                    <SidetextandIcon number='1' step_text='STEP 1' main_text='YOUR INFO' />

                </aside>

                <section className='body_conatiner'  >


                    {
                        stepIndex === 0 ? <PersonalInfo /> :
                            stepIndex === 1 ? <SelectPlan /> :
                                stepIndex === 2 ? < Addons /> :
                                    stepIndex === 3 ? < Summary /> :
                                        stepIndex === 4 ? <Thankyou /> : <PersonalInfo />
                    }
                </section>


            </div>


        </div>
    )
}

export default Home