import React, { createContext, useState } from 'react';

export const FszfContext = createContext();

export const FszfProvider = ({ children }) => {
    const [fszfState, setFszfState] = useState(null);

    return (
        <FszfContext.Provider value={{ fszfState, setFszfState }}>
            {children}
        </FszfContext.Provider>
    );
};

// Usage in a component
// import { useContext } from 'react';
// import { FszfContext } from '../context/FszfContext';
// const { fszfState, setFszfState } = useContext(FszfContext);

// Example: setFszfState(newState);
