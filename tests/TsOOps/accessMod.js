"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superCl = void 0;
var superCl = /** @class */ (function () {
    function superCl() {
        this.empname = "hello";
        this.empid = 23;
        this.company = 'Java';
        console.log("Inside Base class cons");
    }
    superCl.prototype.check = function () {
        console.log(this.empid);
    };
    superCl.prototype.get = function () {
        return this.company;
    };
    return superCl;
}());
exports.superCl = superCl;
function hi() {
    var nm = new superCl();
    console.log(nm.empname);
    nm.check();
    console.log(nm.get());
}
hi();
