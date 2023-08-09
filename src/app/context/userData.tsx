"use client"
import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import axios from "axios";
import { useRouter } from "next/navigation";

// type ProductData = {
//   id : Number,
//   title: String,
//   price: String,
//   category: String,
//   description: String,
//   image: String
// }

type dataContextType = {
    cartItems: any,
    setCartItems: (data:any, deleteItemCall:boolean)=> void
}
const dataContextDefaultValues: dataContextType = {
    cartItems: [],
    setCartItems: (data:any, deleteItemCall : boolean) => {}
}

// type userDataContextType = {
//     username : String,
//     email : String,
//     password : String,
//     address : String,
//     profilepic : String
// }
// const userDataContextDefaultValues: userDataContextType = {
//     username : "",
//     email : "",
//     password : "",
//     address : "",
//     profilepic : ""
// }


const CartDataContext = createContext<dataContextType>(dataContextDefaultValues);
// const UserDataContext = createContext<userDataContextType>(userDataContextDefaultValues);

export const useCartData = () => useContext<dataContextType>(CartDataContext)
// export const useUserData = () => useContext<userDataContextType>(UserDataContext)

type Props = { children: any };


export function UserDataProvider({ children }: Props) { 
    const router = useRouter()   
    const [cartItems , setCartItemsWHook] = useState([])
    const [id , setID] = useState<string>("")
    // const [userData , setUserData] = useState(userDataContextDefaultValues)
    
    const setCartItems = (res:any, deleteItemCall: boolean)=>{
        setCartItemsWHook( res )
        // UPDATE REQUEST
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cart : JSON.stringify(res)
            })
        };
        fetch(`/api/users?id=${id}`, requestOptions)
            .then((res)=>{
                console.log("UPDATE Success" + res.status)
                deleteItemCall ?
                    toast.success('Successfully Deleted !')
                :
                    toast.success('Added to Cart !')
            })
            .catch( (err)=>console.log(err) )
    }
    
    useEffect(()=>{
        // FETCH ID from /api/me/ then update cart
        try{
            const syncID = async () => {
                const user = await axios.get(`/api/me`)
                // if there is an id then return the id else go back to sign in
                return (user.data.user._id)
            }

            const syncCart = async (id:any)=>{
                setID(id)
                // console.log(id)
                fetch(`/api/users?id=${id}`,{
                    cache: 'no-store',
                })
                .then((res)=>res.json())
                .then((res)=>{
                    // console.log(res)
                    const data = res.userData.cart
                    const newCart = JSON.parse(data)
                    setCartItemsWHook( newCart )
                })
                .catch((err)=>{
                    // if any error logout
                    axios.get("/api/logout")
                    .then(()=>{
                        router.push("/signin")
                    })
                })
            }
            
            // CALL get_ID then SyncCART
            syncID().then(id => syncCart(id))
            
        }
        catch(error){
            console.log("fetch Error" + error)
        }
    },[])

    const sendCartData = { cartItems, setCartItems }
    // const sendUserData = { userData, setUserData }
    return (
        // <UserDataContext.Provider value={sendUserData}>

            <CartDataContext.Provider value={sendCartData}>
                {children}
            </CartDataContext.Provider>
        // </UserDataContext.Provider>
    );
}
