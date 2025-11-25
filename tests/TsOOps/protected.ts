import { Employee } from "./getterSetter";

class Hr1 extends Employee{
 update(){
    console.log(this.empid);
    
 }
}
let hr=new Hr1();
hr.update();
