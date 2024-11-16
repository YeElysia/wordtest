//可以用这个测试

import * as DB from "./database/problemDB.ts"

import * as fs from 'fs';
import {readFile} from 'fs/promises';
import * as path from 'path';
import { createInterface } from 'node:readline'

const rl=createInterface
({
  input: process.stdin,
  output: process.stdout,
})
function readJSON(file:string):Promise<string>
{
    const filePath=path.join(__dirname,file);
    return readFile(filePath, 'utf8');  
} 
function getAnswer():Promise<string>
{  
    return new Promise(resolve => rl.question('',resolve));  
}

let update:DB.ProblemDB=new DB.ProblemDB();
async function test():Promise<void>
{
    let instruction:DB.ProblemType[]=JSON.parse(await readJSON("example.json"));
    for(let i:number=0;i<instruction.length;i++) await update.create(instruction[i]);
    let id:number[]=await update.randomFindId('text',2);
    console.log(await update.problemFind(id));
    let userAnswer:{id:number,answer:string}[]=[];
    for(let i:number=0;i<id.length;i++)
    {
        console.log("第"+(i+1)+"题答案为");
        userAnswer.push({id:i,answer:await getAnswer()});
    }
    console.log(await update.answerCheck(userAnswer));
}
test();