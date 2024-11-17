import { ProblemDB,ProblemType } from "@/database/problemDB";
import { NextApiRequest, NextApiResponse } from "next";

const problemDB = new ProblemDB();

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    const problem: ProblemType = req.body;

    try {
      const result = await problemDB.create(problem);
      res.status(201).json(result);
    } catch (error){
      console.error(error);
      console.log(error);
      res.status(500).json({ message: 'Error: Failed to create problem' });
    }
  }
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
} 