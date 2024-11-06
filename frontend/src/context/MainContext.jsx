import { useState } from 'react';
import { createContext } from 'react';

const ContextHandler = createContext()

const MainContext = ({ children }) => {
    const [Avtive, setActive] = useState()
    const [Query, setQuery] = useState("")
    const [ItemId, SetItemId] = useState("")

    return (
        <ContextHandler.Provider value={{ Avtive, setActive, Query, setQuery, ItemId, SetItemId }}>

            {children}

        </ContextHandler.Provider>
    )
}

export default MainContext;

export { ContextHandler }
