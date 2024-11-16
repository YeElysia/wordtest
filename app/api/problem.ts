import { ProblemDB,ProblemType } from "@/database/problemDB";
import { NextApiRequest, NextApiResponse } from "next";

const problemDB = new ProblemDB();

export async function createProblem(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    const problem: ProblemType = req.body;

    try {
      const result = await problemDB.create(problem);
      res.status(201).json(result);
    } catch (error){
      res.status(500).json({ message: 'Error: Failed to create problem' });
    }
  }
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
} 

export async function randomFindId(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    const { type, length } = req.body;

    try {
      const result = await problemDB.randomFindId(type, length);
      res.status(200).json(result);
    } catch (error){
      res.status(500).json({ message: 'Error: Failed to find problem' });
    }
  }
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export async function problemFind(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    const idList: number[] = req.body;

    try {
      const result = await problemDB.problemFind(idList);
      res.status(200).json(result);
    } catch (error){
      res.status(500).json({ message: 'Error: Failed to find problem' });
    }
  }
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export async function answerCheck(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
        const checkList: { id: number, answer: string }[] = req.body;
    
        try {
        const result = await problemDB.answerCheck(checkList);
        res.status(200).json(result);
        } catch (error){
        res.status(500).json({ message: 'Error: Failed to check answer' });
        }
    }
    else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

