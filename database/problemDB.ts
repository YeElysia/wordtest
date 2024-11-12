import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
type ProblemType= {
      type:string,
      stem?:string,
      options?: string[],
      answers? : string,
      answerRule? : string,
    subProblem? :ProblemSeq}
export class ProblemDB{
  create(problem:ProblemClass):any{
    return prisma.problem.create(
      {
	data: {
	  stem : problem.element.stem,
	  problemType : problem.element.type,
	  answers: problem.element.answers??"",
	  answerRule: problem.element.answerRule??"Unique",
	  options :{
	    create : problem.element.options?.map(
	      (value,index)=>{
		return {optionId : index, content : value}
	      })
	  },
	  subProblem :{
	    connect : problem.element.subProblem?.element.map(this.create)
	  }
	}
      }
    );
  }
}
export class ProblemClass{
  element : ProblemType
  constructor(
    obj : ProblemType){
      this.element=obj;
      this.element.stem=this.element.stem??"";
      this.element.options=this.element.options??[];
      this.element.subProblem=this.element.subProblem??new ProblemSeq(0);
  }

}
export class ProblemSeq{
  element : ProblemClass[] = [];
  constructor(length : number){

  }
}
