'use client'
import { createContext, useState } from "react";
export const CardData = createContext(
    {
        listdata: [],
        updatedata: ()=>null,
        DeleteTask: ()=>null,
        decreaseData: () => null,
        cleracarydata:()=>null,
        getCartTotal:()=>null,
        getCartTotalPrice:()=>null
    }
)

export default function CardsProvider({ children }) {
    const [listdata, setListdata] = useState([])

    // add card list
    function updatedata(items) {
        // const newdata=[...listdata,items]
        // setListdata(newdata)

        // stop duplicate data
        const isAlreadyInCart = listdata.findIndex((carditems) => carditems.id === items.id);
        if (isAlreadyInCart === -1) {
            setListdata([...listdata, { ...items, quantity: 1 }]);
        }
        else {
            const updatelist = [...listdata];
            updatelist[isAlreadyInCart].quantity += 1;
            setListdata(updatelist);
        }
    }

    // cleare all data
    const cleracarydata = () => {
        setListdata([])
    }


    // Calculate total quantity of items in the cart
    const getCartTotal = () => {
        return (
            listdata.reduce((total, item) => total + item.quantity, 0)
        )
    }



    // Calculate total price of all items in the cart
    const getCartTotalPrice = () => {
        return listdata.reduce((total, item) => total + item.quantity * item.price, 0);
    };



    // delete card list
    const DeleteTask = (items) => {
        const newitems = listdata.filter(item => item.id !== items.id)
        setListdata(newitems)
    }


      // Decrease quantity of items in the cart
    function decreaseData(items) {
        const isAlreadyInCart = listdata.findIndex((carditems) => carditems.id === items.id);
        if (isAlreadyInCart !== -1) {
            // setListdata([...listdata, { ...items, quantity: 1 }]);
            const updatelist = [...listdata];
            const foundItem = updatelist[isAlreadyInCart]

            if(foundItem.quantity === 1) {
                DeleteTask(items)
            }
            
            else {
                updatelist[isAlreadyInCart].quantity -= 1;
                setListdata(updatelist);

            }
        }
       
    }

    const values = { listdata, updatedata, DeleteTask, cleracarydata, getCartTotal, decreaseData,getCartTotalPrice}

    return (
        <>
            <CardData.Provider value={values}>
                {children}
            </CardData.Provider>
        </>
    )
}