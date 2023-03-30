import React from 'react'
import PersonalInfo from './Components/PersonalInfo/PersonalInfo'
import SelectPlan from './Components/SelectPlan/SelectPlan'
import SidetextandIcon from './Components/SideMenuText/SidetextandIcon'

function Home() {
    return (
        <div className='main_conatiner' >

            <div className="home_container">

                <aside className='aside_container' >

                    <SidetextandIcon number='1' step_text='STEP 1' main_text='YOUR INFO' />

                </aside>

                <section className='body_conatiner'  >
                    {/* <PersonalInfo /> */}
                    <SelectPlan/>
                </section>


            </div>


        </div>
    )
}

export default Home