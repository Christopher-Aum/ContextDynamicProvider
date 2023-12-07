import { createContext, useState } from 'react';
import horoscopesObj from '../data/horoscopes'
const HoroscopeProvider = props => {
    const [currentSign, setCurrentSign]= useState('Leo')
    const sign = horoscopesObj[currentSign]
    console.log(sign)
    return (
        <HoroscopeContext.Provider value={{sign, setCurrentSign}}>
            {props.children}
        </HoroscopeContext.Provider>
    )
}
export const HoroscopeContext = createContext();

export default HoroscopeProvider
