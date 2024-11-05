import * as sql from '@prisma/client'

const prisma=new sql.PrismaClient();

export class User
{
    protected name:string;
    protected password:string;
    constructor(name:string,password:string)
    {
        this.name=name;
        this.password=password;
    }
    //注册

    async isPasswordRight(name:string,passowrd:string):Promise<number>
    {
        const findUser=await prisma.user.findMany({where:{name:String(name)}});
        if(findUser.length===0) return 2;//用户不存在 
        return findUser[0].password==passowrd?1:0;
    }

}
