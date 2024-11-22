import React, { useState } from 'react';

const Problem: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState(''); // 用户输入的答案
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // 判断答案是否正确

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };
  const checkAnswer = () => {
    /*
    if (userAnswer === problemdb.answerCheck([{id: 1, answer: 'Facebook'}])) {
      const correct = problem.answers.trim().toLowerCase() === userAnswer.trim().toLowerCase();
      setIsCorrect(correct);
      if (onAnswer) {
        onAnswer(correct, userAnswer);
      }
    }*/
    try {
      const res = fetch('/api/problem/answercheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: 1, answer: userAnswer }),
      });
    }
 catch (error) {
    console.error('Failed to check answer', error.message);
  }
};

  return (
    <div className="border rounded-lg p-4 bg-gray-50 shadow-md mb-4">
      {/* 题干 */}
      {problem.stem && <p className="font-bold text-lg mb-4">{problem.stem}</p>}

      {/* 填空题 */}
      {problem.problemType === '填空题' && (
        <div className="space-y-2">
          <input
            type="text"
            value={userAnswer}
            onChange={handleInputChange}
            placeholder="请输入答案"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={checkAnswer}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            提交答案
          </button>

          {/* 判断结果 */}
          {isCorrect === true && (
            <p className="text-green-500 font-semibold">答案正确！</p>
          )}
          {isCorrect === false && (
            <p className="text-red-500 font-semibold">答案错误，请再试一次。</p>
          )}
        </div>
      )}

      {/* 选项（选择题） */}
      {problem.problemType === '选择题' && problem.options && (
        <ul className="space-y-2">
          {problem.options.map((option, index) => (
            <li key={index}>
              <button
                onClick={() => onAnswer?.(option === problem.answers, option)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* 答案规则 */}
      {problem.answerRule && (
        <p className="text-sm text-gray-500 italic mt-4">{problem.answerRule}</p>
      )}
    </div>
  );
};

export default Problem;
