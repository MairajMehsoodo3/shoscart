
'use client'

import { useContext, useState } from "react";
import { CardData } from "../context/context";

export default function Cardlist() {

    const { listdata, DeleteTask, cleracarydata, getCartTotal, getCartTotalPrice, decreaseData, updatedata } = useContext(CardData);



    return (
        <>
            <div className="mt-[10rem]">
                <h2 className="text-center text-5xl my-6 underline">Shoes Details!</h2>
                <div className="flex justify-center gap-6 items-center flex-row flex-wrap">

                    {listdata.map((item, index) => {
                        return (
                            <div key={index} className="card bg-base-100 image-full w-96 shadow-xl relative">
                                <figure>
                                    <img
                                        src={item.img}
                                        alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.para}</p>
                                    <div className="card-actions justify-end ">
                                        <div className="card   shadow-xl absolute top-2 right-2">

                                            <button className="btn btn-square btn-sm" onClick={() => DeleteTask(item)}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>


                                        </div>


                                    </div>
                                    <div className="flex justify-between items-center">


                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-yellow-500">Quantity: {item.quantity}</h2>
                                            <h2 className="text-yellow-500">Price: {item.quantity * item.price}</h2>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => updatedata(item)}
                                                    className="h-8 w-8 rounded-full bg-white flex justify-center items-center text-black">
                                                    <span>

                                                        +
                                                    </span>
                                                </button>
                                                <button
                                                    onClick={() => decreaseData(item)}
                                                    className="h-8 w-8 rounded-full bg-white flex justify-center items-center text-black"
                                                >
                                                    <span>

                                                        -
                                                    </span>
                                                </button>

                                            </div>
                                        </div>

                                        <button className="btn btn-primary" >{item.btn}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>
                <div className="text-center mt-5">
                    {listdata.length > 0 && <h1 className="text-lg font-bold">Total Price:$ {getCartTotalPrice()}</h1>}
                    {listdata.length > 0 && <h1 className="text-lg font-bold">Total:Quantity{getCartTotal()}</h1>}
                    {listdata.length > 0 && <button onClick={cleracarydata} className=" bg-slate-500 text-white rounded-sm p-4  ">Clear All Cart</button>}
                </div>

            </div>
        </>
    )
}