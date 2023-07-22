"use client"
import { createContext, useContext, useEffect, useState } from "react"

type dataContextType = {
    cartItems: any,
    setCartItems: (data:any)=> void
};

const dataContextDefaultValues: dataContextType = {
    cartItems: [],
    setCartItems: (data:any)=>{}
};

const UserDataContext = createContext<dataContextType>(dataContextDefaultValues);

export const useUserData = () => useContext(UserDataContext)

type Props = { children: any };

export function UserDataProvider({ children }: Props) {    
    const [cartItems , setCartItemsWHook] = useState([])

    const setCartItems = (res:any)=>{
        setCartItemsWHook( res )
        const id = "64bb8cf34989a048915f96ca"
        // UPDATE REQUEST
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cart : JSON.stringify(res)
            })
        };
        fetch(`http://localhost:3000/api/users?id=${id}`, requestOptions)
            .then((res)=>console.log("UPDATE Success" + res.status))
            .catch( (err)=>console.log(err) )
    }

    // DELETE FUNCTION
    // const requestOptions = {
    //     method: 'DELETE',
    // };
    // fetch(`http://localhost:3000/api/users?id=${id}`, requestOptions).then((res)=>{
    //     console.log("Delete Success" + res.status)
    // }).catch( (err)=>console.log(err) )
    
    const value = { cartItems, setCartItems }

    useEffect(()=>{
        // FETCH FIRST
        try{
            const id = "64bb8cf34989a048915f96ca"
            fetch(`http://localhost:3000/api/users?id=${id}`,{
                cache: 'no-store',
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            })
            .then((res)=>res.json())
            .then((res)=>{
                const data = res.userData.cart
                const newCart = JSON.parse(data)
                // console.log(typeof(newCart))
                // console.log(newCart.length)
                
                setCartItemsWHook( newCart )
            }).catch((err)=>console.error(err))
        }
        catch(error){
            console.log("fetch Error" + error)
        }
    },[])

    return (
        <>
            <UserDataContext.Provider value={value}>
                {children}
            </UserDataContext.Provider>
        </>
    );
}