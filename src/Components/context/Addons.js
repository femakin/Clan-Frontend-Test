import { createContext, useState } from 'react'

export const AdsonContext = createContext();

export const AdsonProvider = ({ children }) => {
    const [selectedAdon, setSelectedAdon] = useState([])
    return (
        <AdsonContext.Provider
            value={{
                selectedAdon, setSelectedAdon
            }}
        >
            {children}
        </AdsonContext.Provider>
    );
}