import { ProblemDB, ProblemType } from "@/database/problemDB";
import { NextApiRequest, NextApiResponse } from "next";

const problemDB = new ProblemDB();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data:ProblemType = req.body;
    try {
      await problemDB.create(data);
      res.status(201).json({success: true, message: "Problem created successfully"});
    } catch (error) {
      res.status(500).json({success: false, message: 'Error: Failed to create problem' });
    }
  }
  else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
} 