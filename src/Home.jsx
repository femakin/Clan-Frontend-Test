import React from 'react'
import Addons from './Components/Addons/Addons'
import PersonalInfo from './Components/PersonalInfo/PersonalInfo'
import SelectPlan from './Components/SelectPlan/SelectPlan'
import SidetextandIcon from './Components/SideMenuText/SidetextandIcon'
import Summary from './Components/Summary/Summary'
import Thankyou from './Components/ThankyouPage/Thankyou'

function Home() {
    return (
        <div className='main_conatiner' >

            <div className="home_container">

                <aside className='aside_container' >

                    <SidetextandIcon number='1' step_text='STEP 1' main_text='YOUR INFO' />

                </aside>

                <section className='body_conatiner'  >
                    <PersonalInfo />
                    {/* <SelectPlan/> */}
                    {/* <Addons/> */}
                    {/* <Summary/> */}
                    {/* <Thankyou/> */}
                </section>


            </div>


        </div>
    )
}

export default Home