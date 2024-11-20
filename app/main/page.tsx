'use client';

import CreateProblem from './components/CreateProblem';
import { ProblemType, ProblemDB} from '@/database/problemDB';



import React from 'react';
import Problem from './components/Problem';

export default function ProblemPage() {
  
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

  try {
    const respense = fetch('/api/problem/findproblem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: problem_type, size: 2 }),
    })

    const idlist = respense.then((res) => res.json());
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
