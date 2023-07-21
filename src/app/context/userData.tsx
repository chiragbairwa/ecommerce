"use client"
import { createContext, useContext, useState } from "react"

type dataContextType = {
    cart: number,
    setCart: (data:any)=>void
    cartItems: any,
    setCartItems: (data:any)=> void
};

const dataContextDefaultValues: dataContextType = {
    cart: 0,
    setCart: (data:any)=>{},
    cartItems: [],
    setCartItems: (data:any)=>{}
};

const UserDataContext = createContext<dataContextType>(dataContextDefaultValues);

export const useUserData = () => useContext(UserDataContext)

type Props = { children: any };

export function UserDataProvider({ children }: Props) {
    const [cart , setCart] = useState(0)
    const [cartItems , setCartItems] = useState([])
    const value = { cart, setCart, cartItems, setCartItems }

    return (
        <>
            <UserDataContext.Provider value={value}>
                {children}
            </UserDataContext.Provider>
        </>
    );
}