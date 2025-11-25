"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var getterSetter_1 = require("./getterSetter");
var Hr1 = /** @class */ (function (_super) {
    __extends(Hr1, _super);
    function Hr1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hr1.prototype.update = function () {
        console.log(this.empid);
    };
    return Hr1;
}(getterSetter_1.Employee));
var hr = new Hr1();
hr.update();
