import { ProblemType, ProblemDB,ProblemClass } from "./problemDB"
let database: ProblemDB;
let problemCache: ProblemType[]=[]
export type RequestType = {type : string, num : number}
type OptionType = {optionId : number, content : string}
async function getProblemFull(request : RequestType){
  const seq = await database.randomFind(request.type,request.num);
  return seq.map((value)=>{
    let data : ProblemType = {
      id : value.id,
      problemType : value.problemType,
      stem : value.stem??"",
      options : value.options.sort((a:OptionType,b:OptionType)=>{
	if (a.optionId>b.optionId)return 1;
	if (a.optionId<b.optionId)return -1;
	return 0;
      }).map((value:OptionType)=>{return value.content})
    }
    return data
  }
  )
}
export async function getProblem(request : RequestType){
  const seq = await getProblemFull(request);

}
