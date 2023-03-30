import { createContext, useState } from 'react'

export const PersonalInfoContext = createContext();

export const PersonalInfoProvider = ({ children }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [p_number, setP_number] = useState('')
    const [personalinfo, setPersonalinfo] = useState(null)


    return (
        <PersonalInfoContext.Provider
            value={{
                name, setName, email, setEmail, p_number, setP_number, personalinfo, setPersonalinfo

            }}
        >
            {children}
        </PersonalInfoContext.Provider>
    );
}