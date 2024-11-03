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
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-serif underline ml-4 mt-10 ">Semester Wise Papers</h2>
      </div>
      <div className="mt-20 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap gap-20 gap-y-10  justify-center w-full items-center ">
          {renderCards(9)}
        </div>
      </div>
    </>
  );
}
