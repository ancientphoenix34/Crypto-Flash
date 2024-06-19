import { createContext } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props)=>{

    const contextValue = {

    }
    return(
        <CoinContext.Provider>
            {props.children}
        </CoinContext.Provider>
    )
}