import { PrismaClient } from "@prisma/client";
import { isRight } from "./answerRule";
const prisma = new PrismaClient();
export type ProblemType= { //内部问题类型格式
  problemType:string,
  stem?:string,
  options?: string[],
  answers? : string,
  answerRule? : string,
  //subProblem? :ProblemSeq
}

export class ProblemDB{
  async create(problem: ProblemType){ //创建一个问题
    return (await prisma.problem.create(
      {
	data: {
	  problemType : problem.problemType,
	  stem : problem.stem,
	  answers: problem.answers??"",
	  answerRule: problem.answerRule??"Unique",
	  options :{
	    create : problem.options?.map(
	      (value,index)=>{
		return {optionId : index, content : value}
	      })
	  }
	    // ,
	    //  subProblem :{
	  //connect : problem.element.subProblem?.element.map(this.create)??undefined
	  //}
	}
      }
    ));
  }
  async randomFindId(type:string, length:number) {
    const totalCount = await prisma.problem.count({
        where: { problemType: type }
    });

    const randomOffsets = Array.from({ length }, () => 
        Math.floor(Math.random() * totalCount)
    );

    const results = [];
    let bo:boolean[]=new Array(totalCount+1).fill(true);
    for (const offset of randomOffsets) {
        const [problem] = await prisma.problem.findMany({
            select: { id: true },
            where: { problemType: type },
            take: 1,
            skip: offset
        });
        if (problem&&bo[problem.id])
        {
          results.push(problem.id);
          bo[problem.id]=false;
        }
    }

    return results;
}

  async problemFind(idList : number[]){ //返回ID列表的题目（不含答案）
    return await Promise.all(idList.map(async (id)=>{
      return await prisma.problem.findUnique(
	{
	  select : {
	    stem : true,
	    problemType : true,
	    options : {
	      select : {
		optionId : true,
		content : true
	      }
	    }
	  },
	  where : {id : id}
	}
      )
    }))
  }
  async answerCheck(checkList: {id : number, answer : string}[]){ // 检查特定ID题目的答案
    return await Promise.all(checkList.map(async (val:{id : number, answer : string})=>{
      const ans=await prisma.problem.findUnique(
	{
	  select : {
	    answers : true,
	    answerRule : true
	  },
	  where : {id : val.id}
	}
      )
      return isRight(val.answer,ans?.answers??"",ans?.answerRule??"")
    }))
  }
    /**
  async delete(id:number){ //删除特定id的问题
    //(await prisma.problem.findMany({where : {domId : id}})).forEach((val)=>this.delete(val.id))
    await prisma.problem.delete({where: {id : id}})
    }*/
}
/**
export class ProblemClass{
  element : ProblemType
  constructor(
    obj : ProblemType){
      this.element=obj;
      this.element.stem=this.element.stem??"";
      this.element.options=this.element.options??[];
      //this.element.subProblem=this.element.subProblem??new ProblemSeq(0).element;
  }

}
 */
