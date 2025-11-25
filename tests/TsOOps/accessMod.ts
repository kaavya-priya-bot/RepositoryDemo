export class superCl{
    public empname:string;
    protected empid:number;
    private company:string; 
    constructor(){
        this.empname=`hello`;
        this.empid=23;
        this.company='Java';
        console.log(`Inside Base class cons`)
    }
    check(){
        console.log(this.empid);
    }
    get(){
        return this.company;
    }
}
function hi(){
const nm=new superCl();
console.log(nm.empname);
nm.check();
console.log(nm.get());
}
hi();