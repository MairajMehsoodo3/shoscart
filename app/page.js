'use client'

import Card from "./components/card";
import Cardlist from "./components/cardlist";
import { Namaz } from "./components/Namaz";
import { DumayData } from "./lip/Dumayapi";


export default function Home() {
  return (
    <>
      <h2 className="text-center text-5xl my-6 underline">Shoes</h2>
      <Card data={DumayData}/>
      <Cardlist />
      {/* <h1 className="text-center text-5xl  mt-8">Namaz Data show Here</h1>
      <Namaz/> */}
     
    </>
  );
}
