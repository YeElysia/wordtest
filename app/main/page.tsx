'use client';
import * as api from './api';
import React from 'react';
import Unit from './components/Unit';

async function test(){
  const repGetId=await api.wordtestConnector("get problem id",{problemType : "text",length: 1})
  console.log(repGetId);
  const repFindProblem=await api.wordtestConnector("find problem", repGetId)
  console.log(repFindProblem)
  const repCheckAns=await api.wordtestConnector("check answer", [{id : repGetId[0].id,answer : "intend"}])
  console.log(repCheckAns)
}

export default function Home() {
   // test(); 
  const [selectkey, setSelectkey] = React.useState<number>(1);

  const handleUnitClick = (unitkey: number) => {
    setSelectkey(unitkey);
  };


  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-white flex flex-col items-center p-6 mx-4 my-6 shadow-lg rounded-[60px]">
        <h1 className="text-2xl font-bold text-[#1935CA]">Logo</h1>
        <div className="mt-8 w-full">
          <h2 className="text-3xl font-semibold text-[#1935CA] pl-6">CONTEXT</h2>
          <ul className="mt-4 font-bold text-center">
            {[...Array(8)].map((_, i) => (
              <Unit key={i} unitkey={i + 1} selectkey={selectkey} onClick={() => handleUnitClick(i + 1)} />
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-8 py-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Reading Section */}
        <div className='flex flex-col'>
          <div className="bg-white p-6 rounded-[36px] shadow-md my-4 ">
            <h2 className="text-xl font-semibold mb-4">Reading One</h2>
            <p className="text-gray-700 mb-6">
              We the <span className="font-bold">1.______</span> take no pride in our
              educational achievement with you. We have prepared you for a world
              that does not exist, indeed, that cannot exist. You have spent four
              years supposing that failure leaves no record. You have learned at
              Brown that when your work goes poorly, the painless solution is to
              drop out. But starting now, in the world to which you go, failure
              marks you. <span className="font-bold">2._____</span> difficulty by
              quitting leaves you changed. Outside Brown,{' '}
              <span className="font-bold">3.______</span> are no heroes.
            </p>
            {/* Answer Section */}
          </div>
          <div className="bg-white p-6 rounded-[36px] shadow-md my-4">
            <h3 className="text-lg font-semibold mb-2">Your Answer</h3>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="1."
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="2."
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="3."
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="w-1/5 bg-white flex flex-col items-center p-6 mx-4 my-6 shadow-lg rounded-[60px]">
        <h2 className="text-lg font-semibold mb-4 text-[#1935CA]">Feedback</h2>
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-500 rounded-md"></div>
          <div className="w-16 h-16 bg-red-500 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}