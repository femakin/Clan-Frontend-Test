import { createContext, useState } from 'react'

export const SelectPlanContext = createContext();

export const SelectPlanProvider = ({ children }) => {


    const [plandetails, setPlandetails] = useState(null)
    const [activeStatesplan, setActiveStatesplan] = useState(Array(3).fill(false));


    return (
        <SelectPlanContext.Provider
            value={{
                plandetails, setPlandetails, activeStatesplan, setActiveStatesplan

            }}
        >
            {children}
        </SelectPlanContext.Provider>
    );
}