import { ProblemDB} from "@/database/problemDB";
import { NextApiRequest, NextApiResponse } from "next";

const problemDB = new ProblemDB();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { type, size }: { type: string ; size: number } = req.body;
        try {
            const idlist = await problemDB.randomFindId(type, size);
            res.status(200).json({ success: true, ids: idlist });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
} 
}