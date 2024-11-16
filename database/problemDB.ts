import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
type ProblemType= { //内部问题类型格式
      type:string,
      stem?:string,
      options?: string[],
      answers? : string,
      answerRule? : string,
    subProblem? :ProblemSeq}
export class ProblemDB{
  async create(problem:ProblemClass){ //创建一个问题
    return (await prisma.problem.create(
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
	      })??undefined
	  },
	  subProblem :{
	    connect : problem.element.subProblem?.element.map(this.create)??undefined
	  }
	}
      }
    ));
  }
  async randomFind(type : string ,length : number,domId? : number){ //随机选择特定类型的问题
    return await prisma.problem.findMany({where : {problemType : type, domId: domId??undefined},orderBy : prisma.$queryRaw `random()`,take : length})
  }
  async list(type : string){
    return await prisma.problem.findMany({where :{problemType : type}})
  }
  async delete(id:number){ //删除特定id的问题
    (await prisma.problem.findMany({where : {domId : id}})).forEach((val)=>this.delete(val.id))
    await prisma.problem.delete({where: {id : id}})
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
  constructor(element: ProblemClass[]){
    this.element=element;
  }
}
