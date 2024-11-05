import * as sql from '@prisma/client'

import {checkPassword} from '../frontEnd/xxx.ts'
//读入与日志
const prisma=new sql.PrismaClient();

class User
{
    protected name:string;
    protected password:string;
    constructor(name:string,password:string)
    {
        this.name=name;
        this.password=password;
    }
    //注册

    //验证


}