'use client';
import * as api from './api';
import React from 'react';
import Unit from './components/Unit';
import Problem from './components/Problem';
import MainContent from './components/MainContent';
import Feedback from'./components/Feedback';
import AnswerInput from'./components/AnswerInput';
import './style.css'


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
  test();
  
  const [selectkey, setSelectkey] = React.useState<number>(1);
  const [id, setId] = React.useState<number>(0);

  React.useEffect(() => {
    GetId().then((id) => setId(id));
  }, []);


  const handleUnitClick = (unitkey: number) => {
    setSelectkey(unitkey);
  };
  type QuestionStatus = {
  id: number; // 每题的唯一标识符
  status: "wrong" | "correct" | "notAttempted"; // 状态的限定值
};
  
  
  const App: React.FC = () => {
  
    const questionData: QuestionStatus[] = [
      { id: 1, status: "wrong" },
      { id: 2, status: "correct" },
      { id: 3, status: "notAttempted" },
    ];

    return (
      <div>
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
            <MainContent />
            {/* Reading Section */}
            <Problem problemid={id} />
          </div>
        </div>
        <div className='feedback'>
          <Feedback questionStatus={questionData} />
        </div>
        <div className='AnswerInput'>
          <AnswerInput />
        </div>
      </div>
    );
  }
}