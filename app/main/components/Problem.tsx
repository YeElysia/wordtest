import * as api from '../api';
import React from 'react';

async function FindProblem(id: number) {
  const repFindProblem = await api.wordtestConnector("find problem", [{ id }])
  return repFindProblem[0].stem
}

function StemProblem({ stem }: { stem: string }) {
  let count = 1;
  const formattedStem = stem.replace(/_+/g, (match) => {
    return `<span class="font-bold">${count++}.______</span>`;
  });

  return (
    <p className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: formattedStem }} />
  );
}


const Problem: React.FC<{problemid: number}> = ({ problemid }) => {
  const [problemstem, setProblemstem] = React.useState<string>('');

  const [answer, setAnswer] = React.useState<string>('');
  const [inputclass, setInputclass] = React.useState<string>('w-full px-4 py-2 border border-gray-300 rounded-md');

  FindProblem(problemid).then((problemstem) => setProblemstem(problemstem));

  return (
    <div className='flex flex-col'>
    <div className="bg-white p-6 rounded-t-[36px] shadow-md my-4">
      <h2 className="text-xl font-semibold mb-4">Problem One</h2>
      <ol>
        <li>
          <StemProblem stem={problemstem} />
        </li>
      </ol>
    </div>
    <div className="bg-white p-6 rounded-b-[36px] shadow-md my-4">
      <h3 className="text-lg font-semibold mb-2">Your Answer</h3>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(problemstem.split('_').length - 1)].map((_, i) => (
          <input
            key={i}
            type="text"
            placeholder={`${i + 1}.`}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default Problem;
