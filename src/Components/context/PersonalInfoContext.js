import { createContext, useState } from 'react'

export const PersonalInfoContext = createContext();

export const PersonalInfoProvider = ({ children }) => {
    const [personalinfo, setPersonalinfo] = useState(null)
    return (
        <PersonalInfoContext.Provider
            value={{
                personalinfo, setPersonalinfo

            }}
        >
            {children}
        </PersonalInfoContext.Provider>
    );
}