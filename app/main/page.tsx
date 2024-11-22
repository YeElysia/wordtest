'use client';
import React from 'react';
// import CreateProblem from './components/CreateProblem';
// import Problem from './components/Problem';

//问题类型格式
/*
type ProblemType= { 
  problemType:string,
  stem?:string,
  options?: string[],
  answers? : string,
  answerRule? : string,

}




export default function ProblemPage() {
  const [ids, setIds] = React.useState<number[]>([]);
  
  const problems: ProblemType[] = [
    {
      problemType: '选择题',
      stem: '下面哪个是 JavaScript 的关键字？',
      options: ['function', 'div', 'table', 'span'],
      answers: 'function',
    },
    {
      problemType: '填空题',
      stem: 'React 是由 ___ 公司开发的。',
      answers: 'Facebook',
      answerRule: '请填写正确的公司名称。',
    },
  ];
  const problem_type = 'completion';
  /*
  try {
    fetch('/api/problem/randomids', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: problem_type, size: 2 }),
    }).then((res) => res.json()).then((data) => {
      if (data.success) {
        setIds(data.ids);
      }
    });
    console.log(idlist);
  } catch (error) {
    console.error('Failed to find problem', error.message);
  }
  


  const handleAnswer = (isCorrect: boolean, userAnswer: string) => {
    console.log(`用户答案: ${userAnswer}, 是否正确: ${isCorrect}`);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">问题列表</h1>
    </div>
  );
}
*/

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-white flex flex-col items-center p-6 mx-4 my-6 shadow-lg rounded-[60px]">
        <h1 className="text-2xl font-bold text-[#1935CA]">Logo</h1>
        <div className="mt-8 w-full">
          <h2 className="text-3xl font-semibold text-[#1935CA] pl-6">CONTEXT</h2>
          <ul className="mt-4">
            <li className="pl-6 py-2 bg-blue-700 text-white rounded-md cursor-pointer">
              UNIT.1
            </li>
            <li className="pl-6 py-2 text-gray-300 hover:text-white cursor-pointer">
              UNIT.2
            </li>
            <li className="pl-6 py-2 text-gray-300 hover:text-white cursor-pointer">
              UNIT.3
            </li>
            <li className="pl-6 py-2 text-gray-300 hover:text-white cursor-pointer">
              UNIT.4
            </li>
          </ul>
        </div>
        <div className='flex flex-row mt-auto'>
          <button className="ml-2 text-[#0d61a6] font-bold text-xl align-middle px-4 py-2 rounded-md text-white justify-items-center">
            EXIT
          </button>
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
            We the <span className="font-bold">1.</span> take no pride in our
            educational achievement with you. We have prepared you for a world
            that does not exist, indeed, that cannot exist. You have spent four
            years supposing that failure leaves no record. You have learned at
            Brown that when your work goes poorly, the painless solution is to
            drop out. But starting now, in the world to which you go, failure
            marks you. <span className="font-bold">2.</span> difficulty by
            quitting leaves you changed. Outside Brown,{' '}
            <span className="font-bold">3.</span> are no heroes.
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
