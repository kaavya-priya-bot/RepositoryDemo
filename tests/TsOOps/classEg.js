var Example = /** @class */ (function () {
    function Example() {
        this.brName = "FF";
        this.BVersion = "34";
    }
    Example.prototype.hello = function () {
        console.log("Hi....");
    };
    return Example;
}());
var example1 = new Example();
console.log(example1.brName);
example1.hello();
