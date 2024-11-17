'use client';
import { useState } from 'react';


const CreateProblem: React.FC = (onSubmit) => {
    const [problemType, setProblemType] = useState('');
    const [stem, setStem] = useState('');
    const [answers, setAnswers] = useState('');
    const [answerRule, setAnswerRule] = useState('');
    const [options, setOptions] = useState('');
    // const [subProblem, setSubProblem] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // const result = await createProblem({ problemType, stem, answers, answerRule, options, subProblem });
            const result = await fetch('/api/problem/createproblem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ problemType, stem, options, answers, answerRule }),
            })
            if (!result.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await result.json();
              console.log(data);
        } catch (error) {
            console.error('Failed to create problem', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={problemType} onChange={(e) => setProblemType(e.target.value)} />
            <input type="text" value={stem} onChange={(e) => setStem(e.target.value === '' ? ' ' : e.target.value)} />
            <input type="text" value={answers} onChange={(e) => setAnswers(e.target.value === '' ? ' ' : e.target.value)} />
            <input type="text" value={answerRule} onChange={(e) => setAnswerRule(e.target.value === '' ? ' ' : e.target.value)} />
            <input type="text" value={options} onChange={(e) => setOptions(e.target.value === '' ? ' ' : e.target.value)} />
            {// <input type="text" value={subProblem} onChange={(e) => setSubProblem(e.target.value)} />
            }
            <button type="submit">Create Problem</button>
        </form>
    );
};


export default function Problem() {
    return (
        <div>
            <h1>Create Problem</h1>
            <CreateProblem />
        </div>
    );
}
