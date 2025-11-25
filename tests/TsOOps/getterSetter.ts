export class Employee{
    public employeName:string;
    private eSalary:number;
    protected empid:number;
    constructor(){
        this.employeName=`Mahima`;
        this.eSalary=34500;
        this.empid=1001;
        console.log("super class constructor");
        
    }
     
    public get getSalary() : number {
        return this.eSalary;
    }
     
    public set setSalary(v : number) {
        this.eSalary = v;
    }
    
    
}
let emp=new Employee();
console.log(emp.getSalary);
emp.setSalary=45000;
console.log(emp.getSalary);
