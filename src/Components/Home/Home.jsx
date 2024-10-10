import React from "react";
import Card from "./Card";

export default function Home() {

    const renderCards=(count)=>{
        const cards=[];
        for(let i=1;i<count;i++){
            cards.push(<Card number={i} key={i}/>)
        }
        return cards;
    }
  return (
    <>
      <div>
        <h2 className="text-2xl underline ml-4">Semester Wise Papers</h2>
      </div>
      <div className="mt-20 h-96">
        <div className="flex flex-wrap gap-20 gap-y-10  px-32 w-full items-center ">
          {renderCards(9)}
        </div>
      </div>
    </>
  );
}
