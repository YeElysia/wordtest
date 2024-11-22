'use client';
import * as api from './api';
import React from 'react';
import Unit from './components/Unit';
import Problem from './components/Problem';

async function test() {
  const repGetId = await api.wordtestConnector("get problem id", { problemType: "text", length: 1 })
  console.log(repGetId);
  const repFindProblem = await api.wordtestConnector("find problem", repGetId)
  console.log(repFindProblem)
  const repCheckAns = await api.wordtestConnector("check answer", [{ id: repGetId[0].id, answer: "intend" }])
  console.log(repCheckAns)
}
async function GetId() {
  const repGetId = await api.wordtestConnector("get problem id", { problemType: "text", length: 1 })
  return repGetId[0].id;
}


export default function Home() {
  const [selectkey, setSelectkey] = React.useState<number>(1);
  const [id, setId] = React.useState<number>(0);

  React.useEffect(() => {
    GetId().then((id) => setId(id));
  }, []);


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

        {/* Reading Section */}
        <Problem problemid={id} />
      </div>
    </div>
  );
}