'use client'
 
import { useContext } from "react";
import { CardData } from "../context/context";



export default function Card({ data }) {
    console.log('my data', data);

    const {updatedata} = useContext(CardData);
    
    return (
        <>
            <div className="flex justify-center gap-6 items-center flex-row flex-wrap">

                {data.map((item,index)=>{
                    return(
                        <div key={index} className="card bg-base-100 image-full w-96 shadow-xl">
                        <figure>
                            <img
                                src={item.img}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                           <div className="flex items-center justify-between"> 
                            <h2 className="card-title">{item.name}</h2>
                           <h3 className="font-bold text-gray-300 italic text-[28px]">${item.price}</h3>
                           </div>
                            <p>{item.para}</p>

                            <div className="card-actions justify-end">
                                <button className="btn btn-primary" onClick={()=>updatedata(item)}>{item.btn}</button>
                            </div>
                        </div>
                    </div>
                    )
                })}
               

            </div>
        </>
    )
}