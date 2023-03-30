import { createContext, useState } from 'react'

export const StepsContext = createContext();

export const StepsContextProvider = ({ children }) => {

    const [stepIndex, setStepIndex] = useState(0);
    return (
        <StepsContext.Provider
            value={{
                stepIndex, setStepIndex
            }}
        >
            {children}
        </StepsContext.Provider>
    );
}