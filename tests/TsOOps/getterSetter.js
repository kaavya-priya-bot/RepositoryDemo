"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
        this.employeName = "Mahima";
        this.eSalary = 34500;
        this.empid = 1001;
        console.log("super class constructor");
    }
    Object.defineProperty(Employee.prototype, "getSalary", {
        get: function () {
            return this.eSalary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setSalary", {
        set: function (v) {
            this.eSalary = v;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
exports.Employee = Employee;
var emp = new Employee();
console.log(emp.getSalary);
emp.setSalary = 45000;
console.log(emp.getSalary);
